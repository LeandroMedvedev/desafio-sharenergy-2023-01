import { Router } from 'express';
import { signUpUserController } from '../controllers';

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

  return router;
};
