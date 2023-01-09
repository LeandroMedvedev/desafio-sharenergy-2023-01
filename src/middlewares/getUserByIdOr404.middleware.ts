import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

import { ErrorHandler } from '../errors';
import { IUser } from '../interfaces';
import { User } from '../models';

export const getUserByIdOr404Middleware = async (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  const { id } = request.params;

  if (!isValidObjectId(id)) {
    throw new ErrorHandler(422, 'invalid user id');
  }

  const userExists = await User.findById(id);

  if (!userExists) {
    throw new ErrorHandler(404, 'user not found');
  }

  request.user = userExists as IUser;

  return next();
};
