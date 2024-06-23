import express from 'express';

import './db/mongodb/index.js';
import routes from './routes.js';

const app = express();

app.use('/', routes);

app.get('/', (_req, res) => {
  return res.status(200).send({ message: 'Pets API' });
});

export default app;
