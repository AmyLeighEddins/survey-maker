import { Router } from 'express';
import { surveyResponsesController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Responses
 *   description: Survey Responses
 */

/**
 * @swagger
 * /surveys/{id}/responses:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: query
 *         name: question_id
 *         schema:
 *           type: string
 *         required: false
 *         description: The question id.
 *       - in: query
 *         name: recipient_type
 *         schema:
 *           type: string
 *           enum: [employee, external]
 *         required: true
 *         description: The recipient type.
 *       - in: query
 *         name: recipient_id
 *         schema:
 *           type: number
 *         required: false
 *         description: The recipient id.
 *     description: Get all survey responses
 *     tags: [Survey Responses]
 *     responses:
 *       200:
 *         description: Returns all responses to the question.
 */
router.route('/:id/responses').get(surveyResponsesController.getSurveyResponses);

/**
 * @swagger
 * /surveys/responses:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Create a survey response
 *     tags: [Survey Responses]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              survey_employee_recipient_id:
 *                type: number
 *                required: false
 *                description: Survey employee recipient id.
 *              survey_external_recipient_id:
 *                type: number
 *                required: false
 *                description: Survey external recipient id.
 *              survey_response_item_id:
 *                type: number
 *                required: true
 *                description: Survey response item id.
 *              survey_question_id:
 *                type: number
 *                required: true
 *                description: Survey question id.
 *              survey_response:
 *                type: string
 *                required: true
 *                description: Survey response.
 *     responses:
 *       201:
 *         description: Returns the new survey response.
 */
router.route('/:id/responses').post(
  [
    body('survey_response_item_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.createASurveyResponse
);

/**
 * @swagger
 * /surveys/responses/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: response_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The response ID
 *     description: Update a survey response
 *     tags: [Survey Responses]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              survey_employee_recipient_id:
 *                type: number
 *                required: false
 *                description: Survey employee recipient id.
 *              survey_external_recipient_id:
 *                type: number
 *                required: false
 *                description: Survey external recipient id.
 *              survey_response_item_id:
 *                type: number
 *                required: true
 *                description: Survey response item id.
 *              survey_question_id:
 *                type: number
 *                required: true
 *                description: Survey question id.
 *              survey_response:
 *                type: string
 *                required: true
 *                description: Survey response.
 *     responses:
 *       201:
 *         description: Returns the updated survey response.
 */
router.route('/:id/responses/:response_id').put(
  [
    body('survey_response_item_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.updateASurveyResponse
);

/**
 * @swagger
 * /surveys/reponses/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: response_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The response ID
 *     description: Delete a survey response by ID
 *     tags: [Survey Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/responses/:response_id').delete(surveyResponsesController.deleteASurveyResponse);

export default router;