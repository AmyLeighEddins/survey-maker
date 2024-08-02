import { NextFunction, Request, Response } from 'express';

export async function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  if (err) {
    console.error(err);
    return res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  }
};
