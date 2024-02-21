import { NextFunction, Request, Response } from "express";
import { log } from "../utils/logger";

async function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
  const start = new Date().getTime();
  const timestamp = new Date().toISOString();
  const method = req.method;
  const path = req.path;

  res.on('finish', () => {
    const duration = new Date().getTime() - start;
    const status = res.statusCode;

    log.http_request({ timestamp, method, path, status, duration });
  });

  next();
};

export { loggingMiddleware }
