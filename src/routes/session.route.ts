import { Router } from 'express';

import { signInUserController } from '../controllers';
import { validateSchemaMiddleware } from '../middlewares';
import { signInUserSchema } from '../schemas';

const router = Router();

export const sessionRoutes = (): Router => {
  router.post(
    '/signin',
    validateSchemaMiddleware(signInUserSchema),
    signInUserController
  );

  return router;
};
