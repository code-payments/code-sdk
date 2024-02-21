import WebSocket from "ws";
import { GrpcHandler } from "./handlerGRPC";
import { Common, AsyncQueue } from '@code-wallet/rpc';
import { MethodName, ServiceName } from "./service";

class WebSocketHandler {
  queue: AsyncQueue<WebSocket.Data>;
  ws: WebSocket;
  grpc: GrpcHandler;

  serviceName?: ServiceName;
  methodName?: MethodName;

  constructor(ws: WebSocket, grpc: GrpcHandler) {
    this.queue = new AsyncQueue<WebSocket.Data>();
    this.ws = ws;
    this.grpc = grpc;
  }

  public listen() {
    this.ws.on("message", (message) => {
      this.queue.enqueue(message);
    });

    this.handleRequests();
  }

  async handleRequests() {
    const wsAsyncIterator = this.createWsAsyncIterator();

    const requestGenerator = async function* (this: WebSocketHandler) {
      for await (const message of wsAsyncIterator) {
        const buf = Buffer.from(message as string);
        const req = Common.Request.fromBinary(buf as Buffer);

        yield req;
      }
    }.bind(this);

    try {
      for await (const response of this.grpc.handle(requestGenerator())) {
        const buf = response.toBinary();
        this.serviceName = this.grpc.serviceName;
        this.methodName = this.grpc.methodName;

        this.ws.send(buf);
      }
    } catch (error) {
      console.log(error);

      const res = new Common.Response({
        result: Common.Response_Result.ERROR,
        message: error instanceof Error ? error.message : "Unknown error",
      });
      const buf = res.toBinary();

      this.ws.send(buf);
      this.ws.close();
    }
  }

  createWsAsyncIterator() {
    return {
      [Symbol.asyncIterator]: () => ({
        next: async () => {
          const value = await this.queue.dequeue();
          return { value, done: value === undefined };
        },
      }),
    };
  }
}

export {
    WebSocketHandler,
};