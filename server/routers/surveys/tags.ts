import { Router } from 'express';
import { surveyTagsController } from '../../controllers';
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
 *     description: Get Tags for a survey
 *     tags: [Survey Associated Tags]
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
//  *     tags: [Survey Associated Tags]
//  *     requestBody:
//  *       content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
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
//  *     tags: [Survey Associated Tags]
//  *     requestBody:
//  *       content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            properties:
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
//  *     tags: [Survey Associated Tags]
//  *     responses:
//  *       204:
//  *         description: No content
//  */
// router.route('/:id/tags/:tag_id').delete(surveyTagsController.deleteASurveyAssociatedTag);

export default router;