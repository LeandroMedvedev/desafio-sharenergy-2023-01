import { NextFunction, Request, Response } from 'express';

import { errorHandler } from '../errors';

export const globalErrorHandlerMiddleware = (
  error: Error,
  _: Request,
  response: Response,
  __: NextFunction
) => errorHandler(error, response);
