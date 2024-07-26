import { Router } from 'express';
import * as surveyTemplatesController from '../../controllers/survey-templates';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Template Metadata
 *   description: Survey Template Metadata
 */

/**
 * @swagger
 * /templates/{id}/metadata:
 *   get:
 *     description: Get Metadata for a survey template
 *     tags: [Survey Template Metadata]
 *     responses:
 *       200:
 *         description: Returns metadata for a survey template
 */
router.route('/:id/metadata').get(surveyTemplatesController.getSurveyTemplateMetadata);

export default router;