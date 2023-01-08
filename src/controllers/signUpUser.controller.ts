import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import { signUpUserService } from '../services';

export const signUpUserController = async (
  request: Request,
  response: Response
) => {
  const { status, message } = await signUpUserService(
    request.validated as IUser
  );

  return response.status(status).json(message);
};
