import { Router } from 'express';

import { petRoutes } from './api/index.js';

const generalRoutes = Router();
generalRoutes.use('/pets', petRoutes);

export default generalRoutes;
