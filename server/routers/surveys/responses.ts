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
 *       - in: query
 *         name: question_id
 *         schema:
 *           type: string
 *         required: false
 *         description: The question id.
 *     description: Get all survey responses
 *     tags: [Survey Responses]
 *     responses:
 *       200:
 *         description: Returns all responses to the question.
 */
router.route('/:id/responses').get(surveyResponsesController.getSurveyResponses);

/**
 * @swagger
 * /surveys/{id}/responses/external:
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
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               survey_external_recipient_id:
 *                 type: number
 *                 description: Survey external recipient id.
 *                 required: true
 *               survey_response_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     survey_question_id:
 *                       type: number
 *                       description: Survey question id.
 *                       required: true
 *                     value:
 *                       type: string
 *                       description: Survey response.
 *                       required: true
 *     responses:
 *       201:
 *         description: Returns the new survey response.
 */
router.route('/:id/responses/external').post(
  [
    body('survey_external_recipient_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.createSurveyExternalResponses
);

/**
 * @swagger
 * /surveys/{id}/responses/employee:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Create a survey employee response
 *     tags: [Survey Responses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               survey_employee_recipient_id:
 *                 type: number
 *                 description: Survey employee recipient id.
 *                 required: false
 *               survey_response_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     survey_question_id:
 *                       type: number
 *                       description: Survey question id.
 *                       required: true
 *                     value:
 *                       type: string
 *                       description: Survey response.
 *                       required: true
 *     responses:
 *       201:
 *         description: Returns the new survey response.
 */
router.route('/:id/responses/employee').post(
  [
    body('survey_employee_recipient_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.createSurveyEmployeeResponses
);

/**
 * @swagger
 * /surveys/{id}/responses/external:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Update an external survey response
 *     tags: [Survey Responses]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               survey_external_recipient_id:
 *                 type: number
 *                 description: Survey external recipient id.
 *                 required: true
 *               survey_response_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: Survey response item id.
 *                       required: true
 *                     survey_question_id:
 *                       type: number
 *                       description: Survey question id.
 *                       required: true
 *                     value:
 *                       type: string
 *                       description: Survey response.
 *                       required: true
 *     responses:
 *       201:
 *         description: Returns the updated survey response.
 */
router.route('/:id/responses/external').put(
  [
    body('survey_external_recipient_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.updateSurveyExternalResponses
);

/**
 * @swagger
 * /surveys/{id}/responses/employee:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Update an employee survey response
 *     tags: [Survey Responses]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               survey_employee_recipient_id:
 *                 type: number
 *                 description: Survey employee recipient id.
 *                 required: false
 *               survey_response_items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: Survey response item id.
 *                       required: true
 *                     survey_question_id:
 *                       type: number
 *                       description: Survey question id.
 *                       required: true
 *                     value:
 *                       type: string
 *                       description: Survey response.
 *                       required: true
 *     responses:
 *       201:
 *         description: Returns the updated survey response.
 */
router.route('/:id/responses/employee').put(
  [
    body('survey_employee_recipient_id')
      .isNumeric()
      .withMessage('The response item id must be a valid survey response item'),
  ],
  validate,
  surveyResponsesController.updateSurveyEmployeeResponses
);

/**
 * @swagger
 * /surveys/{id}/responses/external/{recipient_id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: recipient_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The recipient ID
 *     description: Delete survey responses by recipient ID
 *     tags: [Survey Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/responses/external/:recipient_id').delete(surveyResponsesController.deleteSurveyExternalResponses);

/**
 * @swagger
 * /surveys/{id}/responses/employee/{recipient_id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: recipient_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The recipient ID
 *     description: Delete survey responses by recipient ID
 *     tags: [Survey Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/responses/employee/:recipient_id').delete(surveyResponsesController.deleteSurveyEmployeeResponses);

/**
 * @swagger
 * /surveys/{id}/response-items/external/{response_item_id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: response_item_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The response item ID
 *     description: Delete a survey response by ID
 *     tags: [Survey Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/response-items/external/:response_item_id').delete(surveyResponsesController.deleteASurveyExternalResponseItem);

/**
 * @swagger
 * /surveys/{id}/response-items/employee/{response_item_id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: path
 *         name: response_item_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The response item ID
 *     description: Delete a survey response by ID
 *     tags: [Survey Responses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/response-items/employee/:response_item_id').delete(surveyResponsesController.deleteASurveyEmployeeResponseItem);

export default router;