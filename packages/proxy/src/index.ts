import { log } from "./utils/logger";
import { loggingMiddleware, proxyMiddleware } from './middleware';
import { GrpcHandler, WebSocketHandler } from "./service";
import { handleRequest } from "./service/handlerHTTP";

const proxy = {
  log,
  middleware: {
    logging: loggingMiddleware,
    proxy: proxyMiddleware,
  },
  handlers: {
    handleRequest,
    GrpcHandler,
    WebSocketHandler,
  }
}

export default proxy;
export { proxy };