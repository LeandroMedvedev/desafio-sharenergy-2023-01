import { Router } from 'express';
import { listUsersController, signUpUserController } from '../controllers';

import {
  checkUserExistsMiddleware,
  validateSchemaMiddleware,
} from '../middlewares';
import { signUpUserSchema } from '../schemas';

const router = Router();

export const userRoutes = (): Router => {
  router.post(
    '/signUp',
    validateSchemaMiddleware(signUpUserSchema),
    checkUserExistsMiddleware,
    signUpUserController
  );

  router.get('', listUsersController);

  return router;
};
