import { Response } from 'express';
import { TMessage } from '../types';

export class ErrorHandler {
  public statusCode: number;
  public message: TMessage;

  constructor(statusCode: number, message: TMessage) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const errorHandler = (error: Error, response: Response) => {
  if (error instanceof ErrorHandler) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  console.log(error);

  return response.status(500).json({ message: 'internal server error' });
};
