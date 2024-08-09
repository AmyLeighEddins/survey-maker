import { Router } from 'express';
import { surveyStatusesController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Statuses
 *   description: Survey Statuses
 */

/**
 * @swagger
 * /surveys/statuses:
 *   get:
 *     description: Get all Survey Statuses
 *     tags: [Survey Statuses]
 *     responses:
 *       200:
 *         description: Returns statuses for a survey.
 */
router.route('/').get(surveyStatusesController.getAllSurveyStatuses);

/**
 * @swagger
 * /surveys/statuses:
 *   post:
 *     description: Create a survey status
 *     tags: [Survey Statuses]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *                descriptions: The status name.
 *     responses:
 *       201:
 *         description: Returns new survey status.
 */
router.route('/').post(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the survey status must have minimum length of 3'),
  ],
  validate,
  surveyStatusesController.createASurveyStatus
);

/**
 * @swagger
 * /surveys/statuses/{status_id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: status_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The status ID
 *     description: Get a status by ID
 *     tags: [Survey Statuses]
 *     responses:
 *       200:
 *         description: Returns the survey status.
 */
router.route('/:status_id').get(surveyStatusesController.getSurveyStatusById);

/**
 * @swagger
 * /surveys/statuses/{status_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: status_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The status ID
 *     description: Update a status by ID
 *     tags: [Survey Statuses]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *                descriptions: The status name.
 *     responses:
 *       201:
 *         description: Returns updated status.
 */
router.route('/:status_id').put(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the survey status must have minimum length of 3'),
  ],
  validate,
  surveyStatusesController.updateASurveyStatus
);

/**
 * @swagger
 * /surveys/statuses/{status_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: status_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The status ID
 *     description: Delete a status by ID
 *     tags: [Survey Statuses]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:status_id').delete(surveyStatusesController.deleteASurveyStatus);

export default router;