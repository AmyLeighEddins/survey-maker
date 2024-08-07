import { Router } from 'express';
import { surveyTagsController } from '../../controllers';
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
 * /surveys/tags:
 *   get:
 *     description: Get all Survey Tags
 *     tags: [Survey Tags]
 *     responses:
 *       200:
 *         description: Returns tags for a survey.
 */
router.route('/tags').get(surveyTagsController.getAllSurveyTags);

/**
 * @swagger
 * /surveys/tags:
 *   post:
 *     description: Create a survey tag
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
 *                type: string
 *                required: true
 *                descriptions: The tag description.
 *     responses:
 *       201:
 *         description: Returns new survey tag.
 */
router.route('/tags').post(
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
 * /surveys/tags/{tag_id}:
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
router.route('/tags/:tag_id').get(surveyTagsController.getSurveyTagById);

/**
 * @swagger
 * /surveys/tags/{tag_id}:
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
 *              id:
 *                type: number
 *                required: true
 *                descriptions: The tag id.
 *              description:
 *                type: string
 *                required: true
 *                descriptions: The tag description.
 *     responses:
 *       201:
 *         description: Returns updated tag.
 */
router.route('/tags/:tag_id').put(
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
 * /surveys/tags/{tag_id}:
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
router.route('/tags/:tag_id').delete(surveyTagsController.deleteASurveyTag);

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
router.route('/:id/tags').get(surveyTagsController.getAllSurveyTagsBySurvey);

// TODO: add survey associated tags routes

// /**
//  * @swagger
//  * /surveys/{id}/tags:
//  *   post:
//  *     description: Create a tag for a survey
//  *     tags: [Survey Tags]
//  *     requestBody:
//  *       content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
//  *              id:
//  *                type: number
//  *                required: true
//  *                descriptions: The tag id.
//  *              description:
//  *                type: string
//  *                required: true
//  *                descriptions: The tag description.
//  *     responses:
//  *       201:
//  *         description: Returns new tag for a survey.
//  */
// router.route('/:id/tags').post(
//   [
//     body('description')
//       .isString()
//       .trim()
//       .isLength({ min: 3 })
//       .withMessage('The description of the tag must have minimum length of 3'),
//   ],
//   validate,
//   surveyTagsController.createASurveyAssociatedTag
// );

// /**
//  * @swagger
//  * /surveys/{id}/tags/{tag_id}:
//  *   post:
//  *     description: Update a tag for a survey
//  *     tags: [Survey Tags]
//  *     requestBody:
//  *       content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
//  *              id:
//  *                type: number
//  *                required: true
//  *                descriptions: The tag id.
//  *              description:
//  *                type: string
//  *                required: true
//  *                descriptions: The tag description.
//  *     responses:
//  *       200:
//  *         description: Returns updated tag for a survey.
//  */
// router.route('/:id/tags/:tag_id').put(
//   [
//     body('description')
//       .isString()
//       .trim()
//       .isLength({ min: 3 })
//       .withMessage('The description of the tag must have minimum length of 3'),
//   ],
//   validate,
//   surveyTagsController.updateASurveyAssociatedTag
// );

// /**
//  * @swagger
//  * /surveys/{id}/tags/{tag_id}:
//  *   delete:
//  *     description: Delete a tag by ID
//  *     tags: [Survey Tags]
//  *     responses:
//  *       204:
//  *         description: No content
//  */
// router.route('/:id/tags/:tag_id').delete(surveyTagsController.deleteASurveyAssociatedTag);

export default router;