import { Express, Router } from 'express';

import { sessionRoutes } from './session.route';
import { userRoutes } from './user.route';

const router = Router();

const apiRouter = (): Router => {
  router.use('/users', sessionRoutes());
  router.use('/users', userRoutes());

  return router;
};

export const appRoutes = (app: Express): void => {
  app.use('/api', apiRouter());
};
