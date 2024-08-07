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
 * /surveys/{id}/recipients?type={type}&status={status}:
 *   get:
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
 *     description: Create a recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The recipient id.
 *              employee_id:
 *                type: number
 *                required: false
 *                descriptions: The recipient employee id if the recipient is an employee.
 *              email_address:
 *                type: string
 *                required: false
 *                descriptions: The recipient email id if the recipient is external.
 *              survey_id:
 *                type: number
 *                required: true
 *                descriptions: Survey id from the Surveys table.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                descriptions: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the new survey recipient.
 */
router.route('/:id/recipients').post(
  [
    body('survey_id')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The survey id of the survey must be a valid survey'),
  ],
  validate,
  surveyRecipientsController.createARecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/{recipient_id}:
 *   put:
 *     description: Update a recipient for a survey
 *     tags: [Survey Recipients]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The recipient id.
 *              employee_id:
 *                type: number
 *                required: false
 *                descriptions: The recipient employee id if the recipient is an employee.
 *              email_address:
 *                type: string
 *                required: false
 *                descriptions: The recipient email id if the recipient is external.
 *              survey_id:
 *                type: number
 *                required: true
 *                descriptions: Survey id from the Surveys table.
 *              survey_status_id:
 *                type: number
 *                required: true
 *                descriptions: Survey status id from the SurveyStatuses table.
 *     responses:
 *       201:
 *         description: Returns the updated survey recipient.
 */
router.route('/:id/recipients/:recipient_id').put(
  [
    body('survey_id')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The survey id of the survey must be a valid survey'),
  ],
  validate,
  surveyRecipientsController.updateARecipient
);

/**
 * @swagger
 * /surveys/{id}/recipients/{recipient_id}:
 *   delete:
 *     description: Delete a survey recipient by ID
 *     tags: [Survey Recipients]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/recipients/:recipient_id').delete(surveyRecipientsController.deleteARecipient);

export default router;