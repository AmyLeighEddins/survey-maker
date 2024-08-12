import { Router } from 'express';
import * as surveyController from '../../controllers/tags';
import { body } from 'express-validator';
import { validate } from '../../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Survey Template Associated Tags
 *   description: Survey Template Associated Tags
 */

/**
 * @swagger
 * /templates/{id}/tags:
 *   get:
 *     description: Get Tags for a survey template
 *     tags: [Survey Template Associated Tags]
 *     responses:
 *       200:
 *         description: Returns tags for a survey template.
 */
router.route('/:id/tags').get(surveyController.getAllSurveyTags);

/**
 * @swagger
 * /templates/{id}/tags:
 *   post:
 *     description: Create a tag for a survey template
 *     tags: [Survey Template Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The tag description.
 *     responses:
 *       200:
 *         description: Returns new tag for a survey template.
 */
router.route('/:id/tags').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description must have minimum length of 3'),
  ],
  validate,
  surveyController.createASurveyTag
);

/**
 * @swagger
 * /templates/{id}/tags/{tag_id}:
 *   get:
 *     description: Get a tag by ID
 *     tags: [Survey Template Associated Tags]
 *     responses:
 *       201:
 *         description: Returns the survey template tag.
 */
router.route('/:id/tags/:tag_id').get(surveyController.getSurveyTagById);

/**
 * @swagger
 * /templates/{id}/tags/{tag_id}:
 *   post:
 *     description: Update a tag for a survey template
 *     tags: [Survey Template Associated Tags]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              description:
 *                type: string
 *                required: true
 *                description: The tag description.
 *     responses:
 *       200:
 *         description: Returns updated tag for a survey template.
 */
router.route('/:id/tags/:tag_id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description must have minimum length of 3'),
  ],
  validate,
  surveyController.updateASurveyTag
);

/**
 * @swagger
 * /templates/{id}/tags/{tag_id}:
 *   delete:
 *     description: Delete a template tag by ID
 *     tags: [Survey Template Associated Tags]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id/tags/:tag_id').delete(surveyController.deleteASurveyTag);

export default router;