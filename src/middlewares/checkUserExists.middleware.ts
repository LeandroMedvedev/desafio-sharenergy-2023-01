import { NextFunction, Request, Response } from 'express';

import { ErrorHandler } from '../errors';
import { IUser } from '../interfaces';
import { User } from '../models';

export const checkUserExistsMiddleware = async (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  const { email, username } = request.validated as Pick<
    IUser,
    'email' | 'username'
  >;
  const emailExists = await User.findOne({ email });

  if (emailExists) {
    throw new ErrorHandler(409, 'email already exists');
  }

  const usernameExists = await User.findOne({ username });

  if (usernameExists) {
    throw new ErrorHandler(409, 'username already exists');
  }

  return next();
};
