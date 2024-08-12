import { Router } from 'express';

import { default as rootTemplatesRouter } from './templates';
import { default as metadataRouter } from './metadata';
import { default as questionsRouter } from './questions';
import { default as tagsRouter } from './associated-tags';

const router = Router();

router.use('/', metadataRouter);
router.use('/', questionsRouter);
router.use('/', tagsRouter);
router.use('/', rootTemplatesRouter);

export default router;