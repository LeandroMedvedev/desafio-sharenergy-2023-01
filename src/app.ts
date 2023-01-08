import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';

import { appRoutes } from './routes';
import { errorHandler } from './errors';

const app = express();
app.use(express.json());
appRoutes(app);

app.use((error: Error, _: Request, response: Response, __: NextFunction) => {
  return errorHandler(error, response);
});

export default app;
