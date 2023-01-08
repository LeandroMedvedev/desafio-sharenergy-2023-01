import { Request, Response } from 'express';
import { signInUserService } from '../services';

export const signInUserController = async (
  request: Request,
  response: Response
) => {
  const { status, message } = await signInUserService(request.validated);

  return response.status(status).json(message);
};
