import { Request, Response } from 'express';

import { IUser } from '../interfaces';
import { updateUserService } from '../services';

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  const { status, message } = await updateUserService(
    request.validated as Partial<IUser>,
    request.user
  );

  return response.status(status).json(message);
};
