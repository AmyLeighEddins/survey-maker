import { Router } from 'express';
import { surveyRecipientsController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Recipients
 *   description: Survey Recipients
 */

/**
 * @swagger
 * /surveys/{id}/recipients/external:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *         required: false
 *         description: The status of the survey recipients.
 *     description: Get all survey recipients
 *     tags: [Survey Recipients]
 *     responses:
 *       200:
 *         description: Returns all external survey recipients
 */
router.route('/:id/recipients/external').get(surveyRecipientsController.getAllExternalRecipients);

/**
 * @swagger
 * /surveys/{id}/recipients/employee:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *         required: false
 *         description: The status of the survey recipients.
 *     description: Get all survey recipients
 *     tags: [Survey Recipients]
 *     responses:
 *       200:
 *         description: Returns all employee survey recipients
 */
router.route('/:id/recipients/employee').get(surveyRecipientsController.getAllEmployeeRecipients);

/**
 * @swagger
 * /surveys/{id}/recipients/external:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Create an external recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email_address:
 *                type: string
 *                required: true
 *                description: The recipient email.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the new external survey recipient.
 */
router.route('/:id/recipients/external').post(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey status'),
  ],
  validate,
  surveyRecipientsController.createAnExternalRecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/employee:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *     description: Create an employee recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              employee_id:
 *                type: number
 *                required: true
 *                description: The recipient employee id.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the new employee survey recipient.
 */
router.route('/:id/recipients/employee').post(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey status'),
  ],
  validate,
  surveyRecipientsController.createAnEmployeeRecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/external/{recipient_id}:
 *   put:
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
 *     description: Update an external recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email_address:
 *                type: string
 *                required: true
 *                description: The recipient email.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the updated external survey recipient.
 */
router.route('/:id/recipients/external/:recipient_id').put(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey'),
  ],
  validate,
  surveyRecipientsController.updateAnExternalRecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/employee/{recipient_id}:
 *   put:
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
 *     description: Update an employee recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              employee_id:
 *                type: number
 *                required: false
 *                description: The recipient employee id.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the updated survey recipient.
 */
router.route('/:id/recipients/employee/:recipient_id').put(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey'),
  ],
  validate,
  surveyRecipientsController.updateAnEmployeeRecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/external/{recipient_id}:
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
 *     description: Delete a survey external recipient by ID
 *     tags: [Survey Recipients]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/recipients/external/:recipient_id').delete(surveyRecipientsController.deleteAnExternalRecipient);

/**
 * @swagger
 * /surveys/{id}/recipients/employee/{recipient_id}:
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
 *     description: Delete a survey employee recipient by ID
 *     tags: [Survey Recipients]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/recipients/employee/:recipient_id').delete(surveyRecipientsController.deleteAnEmployeeRecipient);

export default router;