import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';

import { IUser, IUserSignIn } from '../interfaces';

export const validateSchemaMiddleware =
  (shape: AnySchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const data = request.body;

    try {
      const validated = await shape.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      request.validated = validated as IUser | IUserSignIn;

      return next();
    } catch (error) {
      return response.status(400).json({
        message: error.errors,
      });
    }
  };
