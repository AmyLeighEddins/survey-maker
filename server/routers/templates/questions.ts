import { Router } from 'express';
import { templateQuestionsController } from '../../controllers';
import { body } from 'express-validator';
import { validate } from '../../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Template Questions
 *   description: Survey Template Questions
 */

/**
 * @swagger
 * /templates/{id}/questions:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Get all questions for a template
 *     tags: [Template Questions]
 *     responses:
 *       200:
 *         description: Returns all questions for a template.
 */
router.route('/:id/questions').get(templateQuestionsController.getTemplateQuestions);

/**
 * @swagger
 * /templates/{id}/questions:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Create a question for a template
 *     tags: [Template Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                required: false
 *                description: Title of the template question.
 *              description:
 *                type: string
 *                required: false
 *                description: Info about the template question.
 *              tooltip:
 *                type: string
 *                required: false
 *                description: Info about the template question.
 *              sequence:
 *                type: number
 *                required: false
 *                description: Sequence of the question in the template.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey question type from the SurveyQuestionTypes table.
 *     responses:
 *       201:
 *         description: Returns the new template question.
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
  templateQuestionsController.createATemplateQuestion
);

/**
 * @swagger
 * /templates/{id}/questions/{question_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: question_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question ID
 *     description: Update a question for a template
 *     tags: [Template Questions]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                required: false
 *                description: Title of the template question.
 *              description:
 *                type: string
 *                required: false
 *                description: Info about the template question.
 *              tooltip:
 *                type: string
 *                required: false
 *                description: Info about the template question.
 *              sequence:
 *                type: number
 *                required: false
 *                description: Sequence of the question in the template.
 *              survey_question_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey question type from the SurveyQuestionTypes table.
 *     responses:
 *       201:
 *         description: Returns the updated template question.
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
  templateQuestionsController.updateATemplateQuestion
);

/**
 * @swagger
 * /templates/{id}/questions/{question_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: question_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question ID
 *     description: Delete a question for a template by ID
 *     tags: [Template Questions]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/questions/:question_id').delete(templateQuestionsController.deleteATemplateQuestion);

export default router;