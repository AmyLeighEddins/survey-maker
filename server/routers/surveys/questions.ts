import { Router } from 'express';
import * as surveyController from '../../controllers/survey';
import { body } from 'express-validator';
import { validate } from '../../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Questions
 *   description: Survey Questions
 */

/**
 * @swagger
 * /surveys/{id}/questions:
 *   get:
 *     description: Get all questions for a survey
 *     tags: [Survey Questions]
 *     responses:
 *       200:
 *         description: Returns all questions for a survey.
 */
router.route('/:id/questions').get(surveyController.getSurveyQuestions);

/**
 * @swagger
 * /surveys/{id}/questions:
 *   post:
 *     description: Create a question for a survey
 *     tags: [Survey Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The survey question id.
 *              title:
 *                type: string
 *                required: false
 *                descriptions: Title of the survey question.
 *              description:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey question.
 *              tooltip:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey question.
 *              sequence:
 *                type: number
 *                required: false
 *                descriptions: Sequence of the question in the survey.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey question type from the SurveyQuestionTypes table.
 *              survey_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey from the Surveys table.
 *     responses:
 *       201:
 *         description: Returns the new survey question.
 */
router.route('/:id/questions').post(
  [
    body('title')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The title of the question must have minimum length of 3'),
  ],
  validate,
  surveyController.createASurveyQuestion
);

/**
 * @swagger
 * /surveys/{id}/questions/{question_id}:
 *   put:
 *     description: Update a question for a survey
 *     tags: [Survey Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The survey question id.
 *              title:
 *                type: string
 *                required: false
 *                descriptions: Title of the survey question.
 *              description:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey question.
 *              tooltip:
 *                type: string
 *                required: false
 *                descriptions: Info about the survey question.
 *              sequence:
 *                type: number
 *                required: false
 *                descriptions: Sequence of the question in the survey.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey question type from the SurveyQuestionTypes table.
 *              survey_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey from the Surveys table.
 *     responses:
 *       201:
 *         description: Returns the updated survey question.
 */
router.route('/:id/questions/:question_id').put(
  [
    body('title')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The title of the question must have minimum length of 3'),
  ],
  validate,
  surveyController.updateASurveyQuestion
);

/**
 * @swagger
 * /surveys/{id}/questions/{question_id}:
 *   delete:
 *     description: Delete a question for a survey by ID
 *     tags: [Survey Questions]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/questions/:question_id').delete(surveyController.deleteASurveyQuestion);

export default router;