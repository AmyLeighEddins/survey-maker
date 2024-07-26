import { Router } from 'express';
import * as surveyTemplatesController from '../../controllers/survey-templates';

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
 *              survey_template_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey template from the SurveyTemplates table.
 *     responses:
 *       201:
 *         description: Returns the new survey question.
 */
router.route('/:id/questions').post(surveyTemplatesController.createATemplateQuestion);

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
 *              survey_template_id:
 *                type: number
 *                required: false
 *                descriptions: The id of the survey template from the SurveyTemplates table.
 *     responses:
 *       201:
 *         description: Returns the updated survey question.
 */
router.route('/:id/questions/:question_id').put(surveyTemplatesController.updateATemplateQuestion);

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