import { Router } from 'express';

import { default as rootSurveysRouter } from './surveys';
import { default as statusesRouter } from './statuses';
import { default as responsesRouter } from './responses';
import { default as tagsRouter } from './associated-tags';
import { default as questionsRouter } from './questions';
import { default as recipientsRouter } from './recipients';
import { default as metadataRouter } from './metadata';

const router = Router();

router.use('/statuses', statusesRouter);
router.use('/', responsesRouter);
router.use('/', recipientsRouter);
router.use('/', tagsRouter);
router.use('/', questionsRouter);
router.use('/', metadataRouter)
router.use('/', rootSurveysRouter);

export default router;
