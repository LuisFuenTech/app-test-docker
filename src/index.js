import 'dotenv/config';

import app from './app.js';

const DOCKER_NODE_PORT = process.env.DOCKER_NODE_PORT;

app.listen(DOCKER_NODE_PORT, () =>
  console.log(`Server ready and running at port ${DOCKER_NODE_PORT}`)
);
