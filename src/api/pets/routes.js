import { Router } from 'express';

import * as petController from './controller.js';

const petRouter = Router();
petRouter.get('/', petController.getAll);
petRouter.get('/create', petController.create);

export default petRouter;
