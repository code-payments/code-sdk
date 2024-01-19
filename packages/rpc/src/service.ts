import { 
  AnyMessage,
  MethodInfo, 
} from "@bufbuild/protobuf";

import * as proto from './generated';
import { AsyncQueue } from './queue';

/**
 * Describes the structure of the service type, detailing its methods.
 */
export interface ServiceType<S extends {
  [localName: string]: MethodInfo<AnyMessage, AnyMessage> 
}> {
  readonly typeName: string;
  readonly methods: S;
}

/**
 * Type representing a request for a given service and method.
 */
export type Request<S extends ServiceType<any>, K extends keyof S['methods']> = InstanceType<S['methods'][K]['I']>;

/**
 * Type representing a response for a given service and method.
 */
export type Response<S extends ServiceType<any>, K extends keyof S['methods']> = InstanceType<S['methods'][K]['O']>;

/**
 * Configuration options for the RpcStream.
 */
type Options = {
  onError?: (err: Event) => void;  // Handler for WebSocket error events
  onClose?: () => void;            // Handler for WebSocket close events
}

/**
 * Represents an RPC stream that facilitates communication over WebSockets using Protobuf messages.
 * 
 * @typeparam S The service type.
 * @typeparam M The method key within the service type.
 */
class RpcStream<S extends ServiceType<any>, M extends keyof S['methods']> {

  /** The service definition. */
  service: S;

  /** The method within the service. */
  method: S['methods'][M];

  /** Configuration options for the RPC stream. */
  options: Options;

  /** WebSocket instance for communication. */
  ws: WebSocket;

  /** Queue for storing and processing responses from the WebSocket. */
  responseQueue: AsyncQueue<Response<S, M> | Error>;

  /** Function to decode responses from the WebSocket. */
  decode: (buffer: Uint8Array) => Response<S, M>;

  /** Function to encode requests to be sent over the WebSocket. */
  encode: (req: Request<S, M>) => Uint8Array;

  /**
   * Constructs a new RPC stream.
   * 
   * @param service The service definition.
   * @param methodName The method name within the service.
   * @param url The WebSocket endpoint URL.
   * @param options Optional configuration options.
   */
  constructor(service: S, methodName: M, url: string, options?: Options) {
    this.service = service;
    this.method = service.methods[methodName];
    this.ws = new WebSocket(url);
    this.ws.binaryType = "arraybuffer";
    this.responseQueue = new AsyncQueue<Response<S, M> | Error>();
    this.options = options || {};

    this.decode = RpcStream.getDecoder(this.method);
    this.encode = RpcStream.getEncoder(this.method);
  }

  /**
   * Establishes a connection to the WebSocket and sets up necessary event listeners.
   */
  async connect() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });

    this.ws.addEventListener("message", (event: MessageEvent) => {
      const buffer = new Uint8Array(event.data);
      const res = proto.Common.Response.fromBinary(buffer);

      if (res.result === proto.Common.Response_Result.OK) {
        this.responseQueue.enqueue(this.decode(res.body));
      } else {
        this.responseQueue.enqueue(new Error(res.message));
      }
    });

    this.ws.addEventListener("error", (err: Event) => {
      if (this.options.onError) {
        this.options.onError(err);
      }
    });

    this.ws.addEventListener("close", () => {
      if (this.options.onClose) {
        this.options.onClose();
      }
    });
  }

  /**
   * Sends a request over the WebSocket.
   * 
   * @param request The request to be sent.
   */
  write(request: Request<S, M>) {
    const service = this.service.typeName.split(".").pop() as string;
    const method = this.method.name.charAt(0).toLowerCase() + this.method.name.slice(1);
    const body = this.encode(request);

    this.ws.send(
      new proto.Common.Request({
        service,
        method,
        body,
      }).toBinary()
    );
  }

  /**
   * Async generator that reads and yields responses from the WebSocket.
   */
  async *read() : AsyncIterable<[Response<S, M> | undefined, Error | undefined]> {
    while (true) {
      let res : Response<S, M> | Error | undefined = await this.responseQueue.dequeue();
      let err : Error | undefined = undefined;

      if (res instanceof Error) {
        err = res;
        res = undefined;
      }

      yield [res, err] as [Response<S, M> | undefined, Error | undefined];
    }
  }

  /**
   * Closes the WebSocket connection.
   */
  close() {
    this.ws.close();
  }

  /**
   * Retrieves a decoder function for the specified method.
   * 
   * @param method The method for which the decoder function is required.
   * @returns Decoder function.
   */
  static getDecoder<T extends MethodInfo>(method: T) {
    return (data: Uint8Array): InstanceType<T["O"]> => {
      return method.O.fromBinary(data) as InstanceType<T["O"]>;
    };
  }

  /**
   * Retrieves an encoder function for the specified method.
   * 
   * @param _ The method for which the encoder function is required.
   * @returns Encoder function.
   */
  static getEncoder<T extends MethodInfo>(_: T) {
    return (data: InstanceType<T["I"]>): Uint8Array => {
      return data.toBinary();
    };
  }

  /**
   * Creates and connects an RpcStream instance, returning the initialized instance.
   * 
   * @param service The service definition.
   * @param methodName The method name within the service.
   * @param url The WebSocket endpoint URL.
   * @param options Optional configuration options.
   * @returns Initialized RpcStream instance.
   */
  static async create<S extends ServiceType<any>, K extends keyof S['methods']>(
    service: S,
    methodName: K,
    url: string,
    options?: Options,
  ) {
    const stream = new RpcStream<S, K>(service, methodName, url, options);
    await stream.connect();
    return stream;
  }

  /**
   * Creates, connects, and returns a unary method function for the specified service and method.
   * 
   * @param service The service definition.
   * @param methodName The method name within the service.
   * @param url The WebSocket endpoint URL.
   * @returns A unary method function.
   */
  static async createUnaryMethod<S extends ServiceType<any>, M extends keyof S['methods']>(
    service: S,
    methodName: M,
    url: string, 
  ) {
    const stream = new RpcStream<S, M>(service, methodName, url);
    await stream.connect();

    const iterator = stream.read()[Symbol.asyncIterator]();
    return async (request: Request<S, M>): Promise<Response<S, M>> => {
      stream.write(request);
      const [res, err] = (await iterator.next()).value;
      stream.close();

      if (err) { throw err; }
      return res;
    };
  }
}

export {
  RpcStream,
}