import { Router } from 'express';
import * as surveyTemplatesController from '../../controllers/templates/templates';
import { body } from 'express-validator';
import { validate } from '../../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Template Questions
 *   description: Survey Template Questions
 */

/**
 * @swagger
 * /templates/{id}/questions:
 *   get:
 *     description: Get all questions for a survey template
 *     tags: [Survey Template Questions]
 *     responses:
 *       200:
 *         description: Returns all questions for a survey template.
 */
router.route('/:id/questions').get(surveyTemplatesController.getAllTemplateQuestions);

/**
 * @swagger
 * /templates/{id}/questions:
 *   post:
 *     description: Create a question for a survey template
 *     tags: [Survey Template Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                required: false
 *                description: Title of the survey question.
 *              description:
 *                type: string
 *                required: false
 *                description: Info about the survey question.
 *              tooltip:
 *                type: string
 *                required: false
 *                description: Info about the survey question.
 *              sequence:
 *                type: number
 *                required: false
 *                description: Sequence of the question in the survey.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey question type from the SurveyQuestionTypes table.
 *              survey_template_id:
 *                type: number
 *                required: false
 *                description: The id of the survey template from the SurveyTemplates table.
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
  surveyTemplatesController.createATemplateQuestion
);

/**
 * @swagger
 * /templates/{id}/questions/{question_id}:
 *   put:
 *     description: Update a question for a survey template
 *     tags: [Survey Template Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                required: false
 *                description: Title of the survey question.
 *              description:
 *                type: string
 *                required: false
 *                description: Info about the survey question.
 *              tooltip:
 *                type: string
 *                required: false
 *                description: Info about the survey question.
 *              sequence:
 *                type: number
 *                required: false
 *                description: Sequence of the question in the survey.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey question type from the SurveyQuestionTypes table.
 *              survey_template_id:
 *                type: number
 *                required: false
 *                description: The id of the survey template from the SurveyTemplates table.
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
  surveyTemplatesController.updateATemplateQuestion
);

/**
 * @swagger
 * /templates/{id}/questions/{question_id}:
 *   delete:
 *     description: Delete a question for a survey template by ID
 *     tags: [Survey Template Questions]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/questions/:question_id').delete(surveyTemplatesController.deleteATemplateQuestion);

export default router;