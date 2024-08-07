import { Router } from 'express';
import { surveyMetadataController } from '../../controllers/';

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
router.route('/:id/metadata').get(surveyMetadataController.getSurveyMetadata);

export default router;