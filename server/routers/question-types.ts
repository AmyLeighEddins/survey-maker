import { Router } from 'express';
import { surveyQuestionTypesController } from '../controllers';
import { validate } from '../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Question Types
 *   description: Survey Question Types
 */

/**
 * @swagger
 * /question-types:
 *   get:
 *     description: Get all Survey Question Types
 *     tags: [Survey Question Types]
 *     responses:
 *       200:
 *         description: Returns survey question types.
 */
router.route('/').get(surveyQuestionTypesController.getAllSurveyQuestionTypes);

/**
 * @swagger
 * /question-types:
 *   post:
 *     description: Create a survey question type
 *     tags: [Survey Question Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The question type description.
 *     responses:
 *       201:
 *         description: Returns new survey question types.
 */
router.route('/').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey question type must have minimum length of 3'),
  ],
  validate,
  surveyQuestionTypesController.createASurveyQuestionType
);

/**
 * @swagger
 * /question-types/{type_id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question type ID
 *     description: Get a question type by ID
 *     tags: [Survey Question Types]
 *     responses:
 *       200:
 *         description: Returns the survey question type.
 */
router.route('/:type_id').get(surveyQuestionTypesController.getSurveyQuestionTypeById);

/**
 * @swagger
 * /question-types/{type_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question type ID
 *     description: Update a question type by ID
 *     tags: [Survey Question Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The question type description.
 *     responses:
 *       201:
 *         description: Returns updated question type.
 */
router.route('/:type_id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey question type must have minimum length of 3'),
  ],
  validate,
  surveyQuestionTypesController.updateASurveyQuestionType
);

/**
 * @swagger
 * /question-types/{type_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The question type ID
 *     description: Delete a question type by ID
 *     tags: [Survey Question Types]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:type_id').delete(surveyQuestionTypesController.deleteASurveyQuestionType);

export default router;