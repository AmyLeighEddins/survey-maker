import { Router } from 'express';
import { surveyMetadataController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Metadata
 *   description: Survey Metadata
 */

/**
 * @swagger
 * /surveys/{id}/metadata:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Get all Metadata for a survey
 *     tags: [Survey Metadata]
 *     responses:
 *       200:
 *         description: Returns metadata for a survey
 */
router.route('/:id/metadata').get(surveyMetadataController.getSurveyMetadata);

/**
 * @swagger
 * /surveys/{id}/metadata:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Create metadata for a survey
 *     tags: [Survey Metadata]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: string
 *                required: true
 *                descriptions: The metadata value.
 *              user_form_metadata_type_id:
 *                type: number
 *                required: true
 *                descriptions: The metadata type id.
 *     responses:
 *       201:
 *         description: Returns the new survey metadata.
 */
router.route('/:id/metadata').post(
  [
    body('value')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The value of the survey metadata must have minimum length of 3'),
  ],
  validate,
  surveyMetadataController.createASurveyMetadata
);

/**
 * @swagger
 * /surveys/{id}/metadata/{metadata_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *      - in: path
 *        name: metadata_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata ID
 *     description: Update a metadata by ID
 *     tags: [Survey Metadata]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: string
 *                required: true
 *                descriptions: The metadata value.
 *              user_form_metadata_type_id:
 *                type: number
 *                required: true
 *                descriptions: The metadata type id.
 *     responses:
 *       201:
 *         description: Returns updated metadata.
 */
router.route('/:id/metadata/:metadata_id').put(
  [
    body('value')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The value of the survey metadata must have minimum length of 3'),
  ],
  validate,
  surveyMetadataController.updateASurveyMetadata
);

/**
 * @swagger
 * /surveys/{id}/metadata/{metadata_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *      - in: path
 *        name: metadata_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata ID
 *     description: Delete a metadata by ID
 *     tags: [Survey Metadata]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/metadata/:metadata_id').delete(surveyMetadataController.deleteASurveyMetadata);

export default router;