import { Router } from 'express';
import * as surveyController from '../../controllers/surveys/survey';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Metadata
 *   description: Survey Metadata
 */

/**
 * @swagger
 * /surveys/{id}/metadata:
 *   get:
 *     description: Get Metadata for a survey
 *     tags: [Survey Metadata]
 *     responses:
 *       200:
 *         description: Returns metadata for a survey
 */
router.route('/:id/metadata').get(surveyController.getSurveyMetadata);

export default router;