import { Router } from 'express';

import { default as rootSurveysRouter } from './surveys';
import { default as typesRouter } from './types';

const router = Router();

router.use('/types', typesRouter);
router.use('/', rootSurveysRouter);

export default router;
