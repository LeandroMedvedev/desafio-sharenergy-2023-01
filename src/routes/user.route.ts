import { Router } from 'express';

import {
  deleteUserController,
  listUsersController,
  signUpUserController,
  updateUserController,
} from '../controllers';
import {
  checkUserExistsMiddleware,
  getUserByIdOr404Middleware,
  validateSchemaMiddleware,
} from '../middlewares';
import { signUpUserSchema, updateUserSchema } from '../schemas';

const router = Router();

export const userRoutes = (): Router => {
  router.post(
    '/signUp',
    validateSchemaMiddleware(signUpUserSchema),
    checkUserExistsMiddleware,
    signUpUserController
  );

  router.get('', listUsersController);
  router.patch(
    '/:id',
    getUserByIdOr404Middleware,
    validateSchemaMiddleware(updateUserSchema),
    checkUserExistsMiddleware,
    updateUserController
  );
  router.delete('', deleteUserController);

  return router;
};
