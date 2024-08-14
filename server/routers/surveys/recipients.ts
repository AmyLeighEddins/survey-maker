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
 * /surveys/{id}/recipients:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [employee, external]
 *         required: false
 *         description: The recipient type.
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
 *         description: Returns all survey recipients
 */
router.route('/:id/recipients').get(surveyRecipientsController.getAllRecipients);

/**
 * @swagger
 * /surveys/{id}/recipients:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The survey ID
 *       - in: query
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [employee, external]
 *         description: The recipient type.
 *     description: Create a recipient for a survey
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
 *                description: The recipient employee id if the recipient is an employee.
 *              email_address:
 *                type: string
 *                required: false
 *                description: The recipient email id if the recipient is external.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the new survey recipient.
 */
router.route('/:id/recipients').post(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey status'),
  ],
  validate,
  surveyRecipientsController.createARecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/{recipient_id}:
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
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [employee, external]
 *         required: true
 *         description: The recipient type.
 *     description: Update a recipient for a survey
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
 *                description: The recipient employee id if the recipient is an employee.
 *              email_address:
 *                type: string
 *                required: false
 *                description: The recipient email id if the recipient is external.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                description: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the updated survey recipient.
 */
router.route('/:id/recipients/:recipient_id').put(
  [
    body('survey_status_id')
      .isNumeric()
      .withMessage('The survey id of the survey must be a valid survey'),
  ],
  validate,
  surveyRecipientsController.updateARecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/{recipient_id}:
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
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [employee, external]
 *         required: true
 *         description: The recipient type.
 *     description: Delete a survey recipient by ID
 *     tags: [Survey Recipients]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/recipients/:recipient_id').delete(surveyRecipientsController.deleteARecipient);

export default router;