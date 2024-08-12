import { Router } from 'express';
import { surveyAssociatedTagsController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Associated Tags
 *   description: Survey Associated Tags
 */

/**
 * @swagger
 * /surveys/{id}/tags:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Get Tags for a survey
 *     tags: [Survey Associated Tags]
 *     responses:
 *       200:
 *         description: Returns tags for a survey.
 */
router.route('/:id/tags').get(surveyAssociatedTagsController.getSurveyAssociatedTags);

/**
 * @swagger
 * /surveys/{id}/tags:
 *   post:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *     description: Create a tag for a survey
 *     tags: [Survey Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              survey_tag_id:
 *                type: number
 *                required: true
 *                description: The survey tag id.
 *     responses:
 *       201:
 *         description: Returns new tag for a survey.
 */
router.route('/:id/tags').post(
  [
    body('survey_tag_id')
      .isNumeric()
      .withMessage('The survey tag id does not exist'), // TODO: change the validation to check if the survey_tag_id exists
  ],
  validate,
  surveyAssociatedTagsController.createASurveyAssociatedTag
);

/**
 * @swagger
 * /surveys/{id}/tags/{associated_tag_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *      - in: path
 *        name: associated_tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The associated tag ID
 *     description: Update a tag for a survey
 *     tags: [Survey Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              survey_tag_id:
 *                type: number
 *                required: true
 *                description: The survey tag id.
 *     responses:
 *       200:
 *         description: Returns updated tag for a survey.
 */
router.route('/:id/tags/:associated_tag_id').put(
  [
    body('survey_tag_id')
      .isNumeric()
      .withMessage('The survey tag id does not exist'), // TODO: change the validation to check if the survey_tag_id exists
  ],
  validate,
  surveyAssociatedTagsController.updateASurveyAssociatedTag
);

/**
 * @swagger
 * /surveys/{id}/tags/{associated_tag_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The survey ID
 *      - in: path
 *        name: associated_tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The associated tag ID
 *     description: Delete a tag by ID
 *     tags: [Survey Associated Tags]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/tags/:associated_tag_id').delete(surveyAssociatedTagsController.deleteASurveyAssociatedTag);

export default router;