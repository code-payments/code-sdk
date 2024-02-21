import express from "express";
import cors from 'cors'
import http from "http";
import WebSocket from "ws";
import proxy from "../src";

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'https://api.codeinfra.net:443';
const mode = process.env.NODE_ENV || 'development';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(cors());
app.use(express.raw({type: '*/*', limit: '1mb'}));
app.use(proxy.middleware.logging);
app.use(proxy.middleware.proxy);

let id = 0; // ID generator
const newId = () => id++;

// Start service (bidi WS envelopes to GRPC protobufs over HTTP/1)
wss.on("connection", (ws: any, req: any) => {
  const id = newId(); // Assign id to the WebSocket (for logging)
  proxy.log.ws_opened({ id, ip: req.socket.remoteAddress });

  // There's a lot of complexity burried in these two seemingly small modules,
  // be careful when refactoring (async iterators, async generators, async queues, etc.)

  const service = new proxy.handlers.GrpcHandler(id, { baseUrl }); 
  const handler = new proxy.handlers.WebSocketHandler(ws as WebSocket, service);
  handler.listen();

  ws.on("close", () => {
    proxy.log.ws_closed({ id, handler: `${handler.serviceName}.${handler.methodName}` }); 
  });
});

// Handle HTTP requests (unary HTTP envelopes to GRPC protobufs over HTTP/1)
app.post('/v1/api', async (req, res, next) => {
  const id = newId(); // Assign id to the request (for logging)

  // Reusing the GrpcHandler approach from the WebSocket handler
  const service = new proxy.handlers.GrpcHandler(id, { baseUrl }); 
  await proxy.handlers.handleRequest(service, req, res);
});

server.listen(port, () => {
  console.log(`\n🚀 Server ready at: http://localhost:${port}\n`);
  console.log(`\t* Running in ${mode} mode`);
  console.log(`\t* Log level: ${proxy.log.level}\n`);
});