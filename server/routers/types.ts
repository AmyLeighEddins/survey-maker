import { Router } from 'express';
import { surveyTypesController } from '../controllers';
import { body } from 'express-validator';
import { validate } from '../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Types
 *   description: Survey Types
 */

/**
 * @swagger
 * /types:
 *   get:
 *     description: Get all types with optonal type filter
 *     tags: [Survey Types]
 *     responses:
 *       200:
 *         description: Returns all types
 */
router.route('/').get(surveyTypesController.getAllSurveyTypes);

/**
 * @swagger
 * /types:
 *   post:
 *     description: Create a type
 *     tags: [Survey Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The type description.
 *     responses:
 *       200:
 *         description: Returns new type for a survey.
 */
router.route('/').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey type must have minimum length of 3'),
  ],
  validate,
  surveyTypesController.createASurveyType
);

/**
 * @swagger
 * /types/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The type ID
 *     description: Get a type by ID
 *     tags: [Survey Types]
 *     responses:
 *       200:
 *         description: Returns the type.
 */
router.route('/:id').get(surveyTypesController.getSurveyTypeById);

/**
 * @swagger
 * /types/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The type ID
 *     description: Update a type by ID
 *     tags: [Survey Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The type description.
 *     responses:
 *       200:
 *         description: Returns updated type for a survey.
 */
router.route('/:id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey type must have minimum length of 3'),
  ],
  validate,
  surveyTypesController.updateASurveyType
);

/**
 * @swagger
 * /types/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The type ID
 *     description: Delete a type by ID
 *     tags: [Survey Types]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(surveyTypesController.deleteASurveyType);


export default router;