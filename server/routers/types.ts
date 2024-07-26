import { Router } from 'express';
import * as surveyTypesController from '../controllers/survey-types';
import * as surveyMetadataTypesController from '../controllers/survey-metadata-types';
import * as surveyQuestionTypesController from '../controllers/survey-question-types';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types
 */

/**
 * @swagger
 * /types?type={type}:
 *   get:
 *     description: Get all types
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: Returns all types
 */
router.route('/').get(surveyTypesController.getAllSurveyTypes);

// Create a type
router.route('/').post(surveyTypesController.createASurveyType);

// Get a type by id
router.route('/:id').get(surveyTypesController.getSurveyTypeById);

// Update a type by id
router.route('/:id').put(surveyTypesController.updateASurveyType);

// Delete a type by id
router.route('/:id').delete(surveyTypesController.deleteASurveyType);


export default router;