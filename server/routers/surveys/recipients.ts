import { Router } from 'express';
import * as surveyController from '../../controllers/survey';

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
router.route('/:id/recipients').get(surveyController.getAllRecipients);

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
router.route('/:id/recipients').post(surveyController.createARecipient);

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
router.route('/:id/recipients/:recipient_id').put(surveyController.updateARecipient);

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
router.route('/:id/recipients/:recipient_id').delete(surveyController.deleteARecipient);

export default router;