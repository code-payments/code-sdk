import { Request, Response } from 'express';
import { GrpcHandler } from "./handlerGRPC";
import * as proto from '@code-wallet/rpc';

async function handleRequest(grpc: GrpcHandler, req: Request, res: Response) {
  try {
    const buf = Buffer.from(req.body);
    const protoRequest = proto.Common.Request.fromBinary(buf as Buffer);

    // Create an async iterable that yields the single request
    const requestIterable = async function* () {
      yield protoRequest;
    };

    const responses = grpc.handle(requestIterable());
    const responseIterator = responses[Symbol.asyncIterator]();

    // Retrieve only the first response
    const firstResponseResult = await responseIterator.next();

    if (!firstResponseResult.done) {
      const response = firstResponseResult.value;
      res.success(response);
    } else {
      res.error(new proto.Common.Response({
        result: proto.Common.Response_Result.ERROR,
        message: "No response received from gRPC service",
      }), 500);
    }
  } catch (error) {
    console.error(error);

    const resMsg = new proto.Common.Response({
      result: proto.Common.Response_Result.ERROR,
      message: error instanceof Error ? error.message : "Unknown error",
    });

    res.error(resMsg, 500);
  }
}

export {
  handleRequest,
}