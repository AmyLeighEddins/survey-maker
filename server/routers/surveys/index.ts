import { Router } from 'express';

import { default as rootSurveysRouter } from './surveys';
import { default as typesRouter } from './types';
import { default as tagsRouter } from './tags';

const router = Router();

router.use('/types', typesRouter);
router.use('/', tagsRouter);
router.use('/', rootSurveysRouter);

export default router;
