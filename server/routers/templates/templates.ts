import { Router } from 'express';
import * as surveyTemplatesController from '../../controllers/survey-templates';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Templates
 *   description: Survey Templates
 */

// TODO: add filter for get all templates to filter by type

/**
 * @swagger
 * /templates:
 *   get:
 *     description: Get all survey templates
 *     tags: [Templates]
 *     responses:
 *       200:
 *         description: Returns all survey templates
 */
router.route('/').get(surveyTemplatesController.getAllSurveyTemplates);

/**
 * @swagger
 * /templates:
 *   post:
 *     description: Create a survey template
 *     tags: [Templates]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The survey id.
 *              name:
 *                type: number
 *                required: true
 *                descriptions: The survey name.
 *              summary:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey.
 *              created_date:
 *                type: Date
 *                required: false
 *                descriptions: Created date.
 *              updated_date:
 *                type: Date
 *                required: false
 *                descriptions: Updated date.
 *              survey_type_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the new survey template.
 */
router.route('/').post(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the example must have minimum length of 3'),
  ],
  validate,
  surveyTemplatesController.createASurveyTemplate
);

/**
 * @swagger
 * /templates/{id}:
 *   get:
 *     description: Get a survey template by ID
 *     tags: [Templates]
 *     responses:
 *       201:
 *         description: Returns the survey template.
 */
router.route('/:id').get(surveyTemplatesController.getASurveyTemplateById);

/**
 * @swagger
 * /templates/{id}:
 *   put:
 *     description: Update a survey template by ID
 *     tags: [Templates]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The survey id.
 *              name:
 *                type: number
 *                required: true
 *                descriptions: The survey name.
 *              summary:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey.
 *              created_date:
 *                type: Date
 *                required: false
 *                descriptions: Created date.
 *              updated_date:
 *                type: Date
 *                required: false
 *                descriptions: Updated date.
 *              survey_type_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the udpated survey template.
 */
router.route('/:id').put(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the example must have minimum length of 3'),
  ],
  validate,surveyTemplatesController.updateASurveyTemplate
);

/**
 * @swagger
 * /templates/{id}:
 *   delete:
 *     description: Delete a survey template by ID
 *     tags: [Templates]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(surveyTemplatesController.deleteASurveyTemplate);

export default router;