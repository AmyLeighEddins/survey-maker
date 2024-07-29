import { Router } from 'express';
import * as surveyEmployeeResponsesController from '../../controllers/survey-employee-responses';
import * as surveyExternalResponsesController from '../../controllers/survey-external-responses';
import * as surveyResponseItemsController from '../../controllers/survey-response-items';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Responses
 *   description: Survey Responses
 */

/**
 * @swagger
 * /responses?question={question_id}&recipient={recipient_id}&recipient_type={recipient_type}:
 *   get:
 *     description: Get all survey responses
 *     tags: [Responses]
 *     responses:
 *       200:
 *         description: Returns all responses to the question.
 */
router.route('/:question_id').get(surveyEmployeeResponsesController.getSurveyResponses);

/**
 * @swagger
 * /responses:
 *   post:
 *     description: Create a survey response
 *     tags: [Responses]
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
 *              survey_employee_recipient_id:
 *                type: number
 *                required: false
 *                descriptions: Survey employee recipient id.
 *              survey_external_recipient_id:
 *                type: number
 *                required: false
 *                descriptions: Survey external recipient id.
 *              survey_response_item_id:
 *                type: number
 *                required: true
 *                descriptions: Survey response item id.
 *     responses:
 *       201:
 *         description: Returns the new survey response.
 */
router.route('/').post(
  [
    body('survey_response_item_id')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyEmployeeResponsesController.createASurveyResponse
);

/**
 * @swagger
 * /responses/{id}:
 *   put:
 *     description: Update a survey response
 *     tags: [Responses]
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
 *              survey_employee_recipient_id:
 *                type: number
 *                required: false
 *                descriptions: Survey employee recipient id.
 *              survey_external_recipient_id:
 *                type: number
 *                required: false
 *                descriptions: Survey external recipient id.
 *              survey_response_item_id:
 *                type: number
 *                required: true
 *                descriptions: Survey response item id.
 *     responses:
 *       201:
 *         description: Returns the updated survey response.
 */
router.route('/:id').put(
  [
    body('survey_response_item_id')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyEmployeeResponsesController.updateASurveyResponse
);

/**
 * @swagger
 * /reponses/{id}:
 *   delete:
 *     description: Delete a survey response by ID
 *     tags: [Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(surveyEmployeeResponsesController.deleteASurveyResponse);

export default router;