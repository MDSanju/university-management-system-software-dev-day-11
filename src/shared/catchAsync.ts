import { NextFunction, Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';

const catchAsync = (funcAsync: RequestHandler) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await funcAsync(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAsync;
