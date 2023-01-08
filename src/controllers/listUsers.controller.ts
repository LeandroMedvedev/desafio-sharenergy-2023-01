import { Request, Response } from 'express';

import { listUsersService } from '../services';

export const listUsersController = async (_: Request, response: Response) => {
  const { status, message } = await listUsersService();

  return response.status(status).json(message);
};
