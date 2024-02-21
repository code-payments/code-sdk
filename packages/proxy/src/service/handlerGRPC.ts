import { log } from '../utils/logger';
import { createPromiseClient, PromiseClient, Transport } from '@bufbuild/connect';
import { createGrpcTransport } from '@bufbuild/connect-node';
import {
  MethodInfo,
  MethodKind,
  ServiceType,
} from "@bufbuild/protobuf";
import {
  ServiceName,
  MethodName,
  UnaryMethod,
  ServerStreamingMethod,
  ClientStreamingMethod,
  BiDiStreamingMethod,
} from "./service";
import * as proto from '@code-wallet/rpc';

const getDecoder = <T extends MethodInfo>(method: T) => {
  return (data: Buffer): InstanceType<T['I']> => {
    return method.I.fromBinary(data) as InstanceType<T['I']>;
  }
}

const getEncoder = <T extends MethodInfo>(_: T) => {
  return (data: InstanceType<T['O']>): Buffer => {
    return Buffer.from(data.toBinary());
  }
}

const isValidServiceName = (name: string): name is ServiceName => {
  return proto.Services.hasOwnProperty(name);
}

const isValidMethodName = (service: ServiceName, name: string): name is MethodName => {
  return proto.Services[service].methods.hasOwnProperty(name);
}

const getServiceDef = <T extends ServiceName>(name: T): typeof proto.Services[T] => {
  return proto.Services[name];
}

const getMethodDef = (service: ServiceType, methodName: MethodName): MethodInfo => {
  return service.methods[methodName];
}

interface Options {
  baseUrl: string;
  httpVersion: "1.1" | "2";
  interceptors: any[];
  keepSessionAlive?: boolean;
}

const defaultOptions: Options = {
  baseUrl: "",
  httpVersion: "2",
  interceptors: [],
};

class GrpcHandler {
  options: Options;
  transport: Transport;
  serviceName?: ServiceName;
  methodName?: MethodName;
  id: string | number;

  constructor(id: string | number, options: Partial<Options> = {}) {
    if (!options.baseUrl) {
      throw new Error("Missing baseUrl");
    }

    // Merge default options with user provided options
    this.options = {
      baseUrl: options.baseUrl,
      httpVersion: options.httpVersion || defaultOptions.httpVersion,
      interceptors: options.interceptors || defaultOptions.interceptors,
      keepSessionAlive: true,
    };

    this.transport = createGrpcTransport(this.options);
    this.id = id;
  }

  getClient<S extends ServiceName>(serviceDef: typeof proto.Services[S]): PromiseClient<typeof proto.Services[S]> {
    return createPromiseClient(serviceDef, this.transport);
  }

  init(request: proto.Common.Request) {
    const serviceName = request.service as ServiceName;
    const methodName = request.method as MethodName;

    if (this.serviceName && serviceName !== this.serviceName) {
      throw new Error(`Unexpected service name: ${serviceName}`);
    }

    if (this.methodName && methodName !== this.methodName) {
      throw new Error(`Unexpected method name: ${methodName}`);
    }

    if (!isValidServiceName(serviceName)) {
      throw new Error(`Invalid service name: ${serviceName}`);
    }

    if (!isValidMethodName(serviceName, methodName)) {
      throw new Error(`Invalid method name: ${serviceName}.${methodName}`);
    }

    this.serviceName = serviceName;
    this.methodName = methodName;
  }

  async *handle(requests:
    AsyncIterable<proto.Common.Request>):
    AsyncIterable<proto.Common.Response> {

    try {
      for await (const response of this.handleRequest(requests)) {
        yield new proto.Common.Response({
          result: proto.Common.Response_Result.OK,
          body: response,
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";

      log.grpc_error({
        id: this.id,
        serviceName: this.serviceName!,
        methodName: this.methodName!,
        msg: errorMessage,
      });

      yield new proto.Common.Response({
        result: proto.Common.Response_Result.ERROR,
        message: errorMessage,
      });
    }
  }

  async *handleRequest(requests: AsyncIterable<proto.Common.Request>): AsyncIterable<Buffer | undefined> {
    const first = await requests[Symbol.asyncIterator]().next();

    if (first.done) {
      throw new Error("No requests received");
    }

    this.init(first.value);

    if (!this.serviceName || !this.methodName) {
      throw new Error("Unexpected state");
    }

    const serviceDefinition = getServiceDef(this.serviceName);
    const methodDefinition = getMethodDef(serviceDefinition, this.methodName);
    const kind = methodDefinition.kind;

    const decoder = getDecoder(methodDefinition);
    const encoder = getEncoder(methodDefinition);
    const client: any = this.getClient(serviceDefinition);
    const method = client[this.methodName];

    const self = this;
    const requestStream = (async function* () {
      let body = decoder(Buffer.from(first.value.body));

      log.grpc_request({
        id: self.id,
        serviceName: self.serviceName!,
        methodName: self.methodName!,
        body,
      });

      yield body; // handle the first request
      for await (const request of requests) {
        body = decoder(Buffer.from(request.body));

        log.grpc_request({
          id: self.id,
          serviceName: self.serviceName!,
          methodName: self.methodName!,
          body,
        });

        yield body;
      }
    })();

    switch (kind) {
      case MethodKind.Unary: {
        const fn = method as UnaryMethod<typeof methodDefinition>;
        const body = await requestStream.next()
        const response = await fn(body.value!);

        log.grpc_response({
          id: this.id,
          serviceName: this.serviceName!,
          methodName: this.methodName!,
          body: response,
        });

        yield encoder(response);
        break;
      }
      case MethodKind.ServerStreaming: {
        const fn = method as ServerStreamingMethod<typeof methodDefinition>;
        const body = await requestStream.next()
        const responses = fn(body.value!);
        for await (const response of responses) {

          log.grpc_response({
            id: this.id,
            serviceName: this.serviceName!,
            methodName: this.methodName!,
            body: response,
          });

          yield encoder(response);
        }
        break;
      }
      case MethodKind.ClientStreaming: {
        const fn = method as ClientStreamingMethod<typeof methodDefinition>;
        await fn(requestStream);
        yield; // Empty response
        break;
      }
      case MethodKind.BiDiStreaming: {
        const fn = method as BiDiStreamingMethod<typeof methodDefinition>;
        const responses = fn(requestStream);

        for await (const response of responses) {

          log.grpc_response({
            id: this.id,
            serviceName: this.serviceName!,
            methodName: this.methodName!,
            body: response,
          });

          yield encoder(response);
        }
        break;
      }
      default: {
        throw new Error(`Unexpected method kind: ${kind}`);
      }
    }
  }
}

export {
  GrpcHandler,
}