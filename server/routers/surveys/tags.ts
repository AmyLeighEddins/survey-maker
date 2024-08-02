import { Router } from 'express';
import * as surveyController from '../../controllers/surveys/tags';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Tags
 *   description: Survey Tags
 */

/**
 * @swagger
 * /surveys/{id}/tags:
 *   get:
 *     description: Get Tags for a survey
 *     tags: [Survey Tags]
 *     responses:
 *       200:
 *         description: Returns tags for a survey.
 */
router.route('/:id/tags').get(surveyController.getAllSurveyTags);

/**
 * @swagger
 * /surveys/{id}/tags:
 *   post:
 *     description: Create a tag for a survey
 *     tags: [Survey Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The tag id.
 *              description:
 *                type: sting
 *                required: true
 *                descriptions: The tag description.
 *     responses:
 *       200:
 *         description: Returns new tag for a survey.
 */
router.route('/:id/tags').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the tag must have minimum length of 3'),
  ],
  validate,
  surveyController.createASurveyTag
);

/**
 * @swagger
 * /surveys/{id}/tags/{tag_id}:
 *   get:
 *     description: Get a tag by ID
 *     tags: [Survey Tags]
 *     responses:
 *       201:
 *         description: Returns the survey tag.
 */
router.route('/:id/tags/:tag_id').get(surveyController.getSurveyTagById);

/**
 * @swagger
 * /surveys/{id}/tags/{tag_id}:
 *   post:
 *     description: Update a tag for a survey
 *     tags: [Survey Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The tag id.
 *              description:
 *                type: sting
 *                required: true
 *                descriptions: The tag description.
 *     responses:
 *       200:
 *         description: Returns updated tag for a survey.
 */
router.route('/:id/tags/:tag_id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the tag must have minimum length of 3'),
  ],
  validate,
  surveyController.updateASurveyTag
);

/**
 * @swagger
 * /surveys/{id}/tags/{tag_id}:
 *   delete:
 *     description: Delete a tag by ID
 *     tags: [Survey Tags]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/tags/:tag_id').delete(surveyController.deleteASurveyTag);

export default router;