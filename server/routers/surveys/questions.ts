import { Router } from 'express';
import { surveyQuestionsController } from '../../controllers';
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
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Get all questions for a survey
 *     tags: [Survey Questions]
 *     responses:
 *       200:
 *         description: Returns all questions for a survey.
 */
router
  .route('/:id/questions')
  .get(surveyQuestionsController.getSurveyQuestions);

/**
 * @swagger
 * /surveys/{id}/questions:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Create a question for a survey
 *     tags: [Survey Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                title:
 *                  type: string
 *                  required: true
 *                  description: Title of the survey question.
 *                description:
 *                  type: string
 *                  required: true
 *                  description: Info about the survey question.
 *                tooltip:
 *                  type: string
 *                  required: true
 *                  description: Info about the survey question.
 *                sequence:
 *                  type: number
 *                  required: true
 *                  description: Sequence of the question in the survey.
 *                survey_question_type_id:
 *                  type: number
 *                  required: true
 *                  description: The id of the survey question type from the SurveyQuestionTypes table.
 *     responses:
 *       201:
 *         description: Returns the new survey question.
 */
router
  .route('/:id/questions')
  .post(
    [
      body('*.title')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('The title of the question must have minimum length of 3'),
    ],
    validate,
    surveyQuestionsController.createSurveyQuestions
  );

/**
 * @swagger
 * /surveys/{id}/questions:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Update questions for a survey
 *     tags: [Survey Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                id:
 *                  type: number
 *                  required: true
 *                  description: ID of the survey question.
 *                title:
 *                  type: string
 *                  required: true
 *                  description: Title of the survey question.
 *                description:
 *                  type: string
 *                  required: true
 *                  description: Info about the survey question.
 *                tooltip:
 *                  type: string
 *                  required: true
 *                  description: Info about the survey question.
 *                sequence:
 *                  type: number
 *                  required: true
 *                  description: Sequence of the question in the survey.
 *                survey_question_type_id:
 *                  type: number
 *                  required: true
 *                  description: The id of the survey question type from the SurveyQuestionTypes table.
 *     responses:
 *       201:
 *         description: Returns the updated survey question.
 */
router
  .route('/:id/questions')
  .put(
    [
      body('*.title')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('The title of the question must have minimum length of 3'),
    ],
    validate,
    surveyQuestionsController.updateSurveyQuestions
  );

/**
 * @swagger
 * /surveys/{id}/questions/{question_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *      - in: path
 *        name: question_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question ID
 *     description: Delete a question for a survey by ID
 *     tags: [Survey Questions]
 *     responses:
 *       204:
 *         description: No content
 */
router
  .route('/:id/questions/:question_id')
  .delete(surveyQuestionsController.deleteASurveyQuestion);

export default router;
