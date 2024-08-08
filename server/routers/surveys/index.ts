import { Router } from 'express';

import { default as rootSurveysRouter } from './surveys';
import { default as typesRouter } from './types';
import { default as tagsRouter } from './tags';
import { default as statusesRouter } from './statuses';

const router = Router();

router.use('/types', typesRouter);
router.use('/statuses', statusesRouter);
router.use('/', tagsRouter);
router.use('/', rootSurveysRouter);

export default router;
