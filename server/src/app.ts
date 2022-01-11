import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errorHandler } from './middlewares/error-handler.middleware';
import { notFound } from './middlewares/not-found.middleware';
import { armyRouter } from './routes/army.route';

const app = express();
app.use(cors());
app.use(express.json());
//API
app.use('/api', armyRouter);

//not found
app.use(notFound);

//Error handler
app.use(errorHandler);

export { app }