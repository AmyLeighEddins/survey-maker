import { Router } from 'express';
import { templateAssociatedTagsController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Template Associated Tags
 *   description: Survey Template Associated Tags
 */

/**
 * @swagger
 * /templates/{id}/tags:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Get Associated Tags for a template
 *     tags: [Template Associated Tags]
 *     responses:
 *       200:
 *         description: Returns tags for a template.
 */
router
  .route('/:id/tags')
  .get(templateAssociatedTagsController.getTemplateAssociatedTags);

/**
 * @swagger
 * /templates/{id}/tags:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Create an associated tag for a template
 *     tags: [Template Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                survey_tag_id:
 *                  type: number
 *                  required: true
 *                  description: The survey tag id.
 *     responses:
 *       201:
 *         description: Returns new tag for a template.
 */
router.route('/:id/tags').post(
  [
    body('*.survey_tag_id')
      .isNumeric()
      .withMessage('The template tag id does not exist'), // TODO: change the validation to check if the survey_tag_id exists
  ],
  validate,
  templateAssociatedTagsController.createTemplateAssociatedTags
);

/**
 * @swagger
 * /templates/{id}/tags/{associated_tag_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: associated_tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The associated tag ID
 *     description: Update an associated tag for a template
 *     tags: [Template Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                survey_tag_id:
 *                  type: number
 *                  required: true
 *                  description: The survey tag id.
 *     responses:
 *       201:
 *         description: Returns updated tag for a template.
 */
router.route('/:id/tags/:associated_tag_id').put(
  [
    body('survey_tag_id')
      .isNumeric()
      .withMessage('The survey tag id does not exist'), // TODO: change the validation to check if the survey_tag_id exists
  ],
  validate,
  templateAssociatedTagsController.updateATemplateAssociatedTag
);

/**
 * @swagger
 * /templates/{id}/tags/{associated_tag_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *      - in: path
 *        name: associated_tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The associated tag ID
 *     description: Delete an associated tag of a template
 *     tags: [Template Associated Tags]
 *     responses:
 *       204:
 *         description: No content
 */
router
  .route('/:id/tags/:associated_tag_id')
  .delete(templateAssociatedTagsController.deleteATemplateAssociatedTag);

export default router;
