import 'express-async-errors';
import cors from 'cors';
import express from 'express';

import { appRoutes } from './routes';
import { globalErrorHandlerMiddleware } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json());
appRoutes(app);

app.use(globalErrorHandlerMiddleware);

export default app;
