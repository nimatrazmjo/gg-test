import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middleware/error-handler.middleware';
import { notFound } from './middleware/not-found.middleware';

const app = express();

//API

//not found
app.use(notFound);

//Error handler
app.use(errorHandler);

export { app }