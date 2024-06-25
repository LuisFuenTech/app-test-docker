import express from 'express';

import { connectWithRetry } from './db/mongodb/index.js';
import routes from './routes.js';

connectWithRetry();

const app = express();

app.use('/', routes);

app.get('/', (_req, res) => {
  return res.status(200).send({ message: 'Pets API' });
});

export default app;
