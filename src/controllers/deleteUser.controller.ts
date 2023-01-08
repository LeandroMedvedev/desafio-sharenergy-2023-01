import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import { deleteUserService } from '../services';

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const { status, message } = await deleteUserService(
    request.query as Pick<IUser, 'username'>
  );

  return response.status(status).json(message);
};
