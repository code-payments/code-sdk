import { NextFunction, Request, Response } from "express";
import * as proto from "@code-wallet/rpc";

declare global {
  namespace Express {
    interface Response {
        success: (res: proto.Common.Response) => void;
        error: (res: proto.Common.Response, status: number) => void;
    }
  }
}

const send = (body: proto.Common.Response, res: Response, status: number) => {
    res.header("Content-Type", "application/octet-stream");
    res.status(status);
    res.send(Buffer.from(body.toBinary()));
};

const success = (res: Response) => {
  return (body: proto.Common.Response) => {
    send(body, res, 200);
  };
};

const error = (res: Response) => {
  return (body: proto.Common.Response, status: number) => {
    send(body, res, status);
  };
};

async function proxyMiddleware(_: Request, res: Response, next: NextFunction) {

  res.success = success(res);
  res.error = error(res);

  next();
};


export { proxyMiddleware };