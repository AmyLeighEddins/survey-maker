import { Router } from 'express';
import { surveyTagsController } from '../controllers';
import { validate } from '../utils/validator';
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
 * /tags:
 *   get:
 *     description: Get all Survey Tags
 *     tags: [Survey Tags]
 *     responses:
 *       200:
 *         description: Returns survey tags.
 */
router.route('/').get(surveyTagsController.getAllSurveyTags);

/**
 * @swagger
 * /tags:
 *   post:
 *     description: Create a survey tag
 *     tags: [Survey Tags]
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
 *       201:
 *         description: Returns new survey tag.
 */
router.route('/').post(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey tag must have minimum length of 3'),
  ],
  validate,
  surveyTagsController.createASurveyTag
);

/**
 * @swagger
 * /tags/{tag_id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The tag ID
 *     description: Get a tag by ID
 *     tags: [Survey Tags]
 *     responses:
 *       200:
 *         description: Returns the survey tag.
 */
router.route('/:tag_id').get(surveyTagsController.getSurveyTagById);

/**
 * @swagger
 * /tags/{tag_id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The tag ID
 *     description: Update a tag by ID
 *     tags: [Survey Tags]
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
 *       201:
 *         description: Returns updated tag.
 */
router.route('/:tag_id').put(
  [
    body('description')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The description of the survey tag must have minimum length of 3'),
  ],
  validate,
  surveyTagsController.updateASurveyTag
);

/**
 * @swagger
 * /tags/{tag_id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: tag_id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The tag ID
 *     description: Delete a tag by ID
 *     tags: [Survey Tags]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:tag_id').delete(surveyTagsController.deleteASurveyTag);

export default router;