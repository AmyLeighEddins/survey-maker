import { Router } from 'express';
import * as surveyController from '../../controllers/survey';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Surveys
 *   description: Survey Routes
 */

// TODO: add filter for get all surveys to filter by type

/**
 * @swagger
 * /surveys:
 *   get:
 *     description: Get all surveys
 *     tags: [Surveys]
 *     responses:
 *       200:
 *         description: Returns all surveys
 */
router.route('/').get(surveyController.getAllSurveys);

/**
 * @swagger
 * /surveys:
 *   post:
 *     description: Create a survey
 *     tags: [Surveys]
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
 *              summary:
 *                type: string
 *                required: true
 *                descriptions: Info about the survey.
 *              created_date:
 *                type: string
 *                format: date-time
 *                required: true
 *                descriptions: Created date.
 *              expiry_date:
 *                type: string
 *                format: date-time
 *                required: true
 *                descriptions: Expire date.
 *              survey_type_id:
 *                type: number
 *                required: true
 *                descriptions: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the new survey.
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
  surveyController.createASurvey
);

/**
 * @swagger
 * /surveys/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Get a survey by ID
 *     tags: [Surveys]
 *     responses:
 *       201:
 *         description: Returns the survey.
 */
router.route('/:id').get(surveyController.getSurveyById);

/**
 * @swagger
 * /surveys/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Update a survey by ID
 *     tags: [Surveys]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The survey name.
 *              summary:
 *                type: string
 *                required: true
 *                descriptions: Info about the survey.
 *              created_date:
 *                type: string
 *                format: date-time
 *                required: true
 *                descriptions: Created date.
 *              expiry_date:
 *                type: string
 *                format: date-time
 *                required: true
 *                descriptions: Expire date.
 *              survey_type_id:
 *                type: number
 *                required: true
 *                descriptions: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the udpated survey.
 */
router.route('/:id').put(
  [
    body('summary')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the example must have minimum length of 3'),
  ],
  validate,
  surveyController.updateASurvey
);

/**
 * @swagger
 * /surveys/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Delete a survey by ID
 *     tags: [Surveys]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(surveyController.deleteASurvey);

export default router;