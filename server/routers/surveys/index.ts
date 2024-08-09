import { Router } from 'express';

import { default as rootSurveysRouter } from './surveys';
import { default as tagsRouter } from './tags';
import { default as statusesRouter } from './statuses';
import { default as metadataRouter } from '../metadata-types';

const router = Router();

router.use('/statuses', statusesRouter);
router.use('/', tagsRouter);
router.use('/', metadataRouter);
router.use('/', rootSurveysRouter);

export default router;
