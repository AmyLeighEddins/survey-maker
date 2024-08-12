import { Router } from 'express';
import { templateMetadataController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Template Metadata
 *   description: Survey Template Metadata
 */

/**
 * @swagger
 * /templates/{id}/metadata:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Get all Metadata for a template
 *     tags: [Template Metadata]
 *     responses:
 *       200:
 *         description: Returns metadata for a template
 */
router.route('/:id/metadata').get(templateMetadataController.getTemplateMetadata);

/**
 * @swagger
 * /templates/{id}/metadata:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Create metadata for a template
 *     tags: [Template Metadata]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: string
 *                required: true
 *                description: The metadata value.
 *              user_form_metadata_type_id:
 *                type: number
 *                required: true
 *                description: The metadata type id.
 *     responses:
 *       201:
 *         description: Returns the new template metadata.
 */
router.route('/:id/metadata').post(
  [
    body('value')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The value of the template metadata must have minimum length of 3'),
  ],
  validate,
  templateMetadataController.createATemplateMetadata
);

/**
 * @swagger
 * /templates/{id}/metadata/{metadata_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: metadata_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata ID
 *     description: Update a metadata by ID
 *     tags: [Template Metadata]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              value:
 *                type: string
 *                required: true
 *                description: The metadata value.
 *              user_form_metadata_type_id:
 *                type: number
 *                required: true
 *                description: The metadata type id.
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
      .withMessage('The value of the template metadata must have minimum length of 3'),
  ],
  validate,
  templateMetadataController.updateATemplateMetadata
);

/**
 * @swagger
 * /templates/{id}/metadata/{metadata_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: metadata_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The metadata ID
 *     description: Delete a metadata by ID
 *     tags: [Template Metadata]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/metadata/:metadata_id').delete(templateMetadataController.deleteATemplateMetadata);

export default router;