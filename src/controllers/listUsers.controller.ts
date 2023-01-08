import { Request, Response } from 'express';
import { IUser } from '../interfaces';

import { listUsersService } from '../services';

export const listUsersController = async (
  request: Request,
  response: Response
) => {
  const { status, message } = await listUsersService(
    request.query as Pick<IUser, 'username'>
  );

  return response.status(status).json(message);
};
