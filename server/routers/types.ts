import { Router } from 'express';
import * as surveyTypesController from '../controllers/survey-types';
import * as surveyMetadataTypesController from '../controllers/survey-metadata-types';
import * as surveyQuestionTypesController from '../controllers/survey-question-types';
import { body } from 'express-validator';
import { validate } from '../utils/validator';

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

/**
 * @swagger
 * /types?type={type}:
 *   post:
 *     description: Create a type
 *     tags: [Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The type id.
 *              description:
 *                type: sting
 *                required: true
 *                descriptions: The type description.
 *     responses:
 *       200:
 *         description: Returns new type for a survey.
 */
router.route('/').post(
  [
    body('summary')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The summary of the survey must have minimum length of 3'),
  ],
  validate,
  surveyTypesController.createASurveyType
);

/**
 * @swagger
 * /types?type={type}/{id}:
 *   get:
 *     description: Get a type by ID
 *     tags: [Types]
 *     responses:
 *       201:
 *         description: Returns the type.
 */
router.route('/:id').get(surveyTypesController.getSurveyTypeById);

/**
 * @swagger
 * /types?type={type}/{id}:
 *   put:
 *     description: Update a type by ID
 *     tags: [Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The type id.
 *              description:
 *                type: sting
 *                required: true
 *                descriptions: The type description.
 *     responses:
 *       200:
 *         description: Returns updated type for a survey.
 */
router.route('/:id').put(
  [
    body('summary')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The summary of the survey must have minimum length of 3'),
  ],
  validate,
  surveyTypesController.updateASurveyType
);

/**
 * @swagger
 * /types?type={type}/{id}:
 *   delete:
 *     description: Delete a type by ID
 *     tags: [Types]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(surveyTypesController.deleteASurveyType);


export default router;