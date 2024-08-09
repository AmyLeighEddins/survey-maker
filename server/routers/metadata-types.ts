import { Router } from 'express';
import { surveyMetadataTypesController } from '../controllers';
import { validate } from '../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Metadata Types
 *   description: Survey Metadata Types
 */

/**
 * @swagger
 * /metadata-types:
 *   get:
 *     description: Get all Survey Metadata Types
 *     tags: [Survey Metadata Types]
 *     responses:
 *       200:
 *         description: Returns survey metadata types.
 */
router.route('/').get(surveyMetadataTypesController.getAllSurveyMetadataTypes);

/**
 * @swagger
 * /metadata-types:
 *   post:
 *     description: Create a survey metadata
 *     tags: [Survey Metadata Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                descriptions: The metadata description.
 *     responses:
 *       201:
 *         description: Returns new survey metadata types.
 */
router.route('/').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey metadata type must have minimum length of 3'),
  ],
  validate,
  surveyMetadataTypesController.createASurveyMetadataType
);

/**
 * @swagger
 * /metadata-types/{type_id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata type ID
 *     description: Get a metadata type by ID
 *     tags: [Survey Metadata Types]
 *     responses:
 *       200:
 *         description: Returns the survey metadata type.
 */
router.route('/:type_id').get(surveyMetadataTypesController.getSurveyMetadataTypeById);

/**
 * @swagger
 * /metadata-types/{type_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata type ID
 *     description: Update a metadata type by ID
 *     tags: [Survey Metadata Types]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                descriptions: The metadata type description.
 *     responses:
 *       201:
 *         description: Returns updated metadata type.
 */
router.route('/:type_id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey metadata type must have minimum length of 3'),
  ],
  validate,
  surveyMetadataTypesController.updateASurveyMetadataType
);

/**
 * @swagger
 * /metadata-types/{type_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: type_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata type ID
 *     description: Delete a metadata type by ID
 *     tags: [Survey Metadata Types]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:type_id').delete(surveyMetadataTypesController.deleteASurveyMetadataType);

export default router;