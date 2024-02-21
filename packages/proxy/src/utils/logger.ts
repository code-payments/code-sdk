import { AnyMessage } from "@bufbuild/protobuf";
import { hexy } from "hexy";

const level = process.env.LOG_LEVEL || 'debug';

function minLevel(val: string) {
    const levels = ['debug', 'info', 'error'];
    const current = levels.indexOf(level);
    const provided = levels.indexOf(val);
    return provided >= current;
}

function anyMessageToString(body: AnyMessage) {
  const jsonBody = body.toJson();

  const stringBody = JSON.stringify(jsonBody, (key, value) => {
    if (key === "value") {
      return Buffer.from(value, 'base64').toString('hex');
    }
    return value;
  }, 2);

  return stringBody;
}

function ws_opened(opt: { id:string|number, ip:string }): void {
    if (minLevel('info')) {
        console.log(`\n\x1b[33mws-opened: \x1b[0m id:${opt.id}, ip:${opt.ip}`);
    }
}

function ws_closed(opt: { id:string|number, handler:string }): void {
    if (minLevel('info')) {
        console.log(`\n\x1b[33mws-closed: \x1b[0m id:${opt.id}, handler:\x1b[32m ${opt.handler}\x1b[0m `);
    }
}

function grpc_request(opt: { serviceName:string, methodName:string, id:string|number, body: AnyMessage }): void {
    if (minLevel('debug')) {
        console.log(`\n\x1b[33mgrpc-request: \x1b[0m \x1b[32m${opt.serviceName}.${opt.methodName}\x1b[0m, ws:${opt.id}`)
        const buf = Buffer.from(opt.body.toBinary());
        console.log(hexy(buf));
        console.log(anyMessageToString(opt.body));
    }
}

function grpc_response(opt: { serviceName:string, methodName:string, id:string|number, body: AnyMessage }): void {
    if (minLevel('debug')) {
        console.log(`\n\x1b[33mgrpc-response: \x1b[0m \x1b[32m${opt.serviceName}.${opt.methodName}\x1b[0m, ws:${opt.id}`)
        const buf = Buffer.from(opt.body.toBinary());
        console.log(hexy(buf));
        console.log(anyMessageToString(opt.body));
    }
}

function grpc_error(opt: { serviceName:string, methodName:string, id:string|number, msg:string }): void {
    if (minLevel('error')) {
        console.log(`\n\x1b[33mgrpc-error: \x1b[0m, ws:${opt.id}`)
        console.log(opt.msg);
    }
}

function http_request(opt: { timestamp:string, method:string, path:string, status:number, duration:number }): void {
    if (minLevel('info')) {
        console.log([
        `\x1b[36m${opt.timestamp}\x1b[0m:`,
        `\x1b[33m${opt.method}\x1b[0m`,
        `\x1b[32m${opt.path}\x1b[0m`,
        `\x1b[34m${opt.status}\x1b[0m`,
        `-\x1b[35m${opt.duration}ms\x1b[0m`
        ].join(' '))
    }
}

export const log = {
    level,
    ws_opened,
    ws_closed,
    grpc_request,
    grpc_response,
    grpc_error,
    http_request,
}