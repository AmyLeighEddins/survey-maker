import { Router } from 'express';
import { templatesController } from '../../controllers';
import { validate } from '../../utils/validator';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Templates
 *   description: Survey Templates
 */

// TODO: add filter for get all templates to filter by type

/**
 * @swagger
 * /templates:
 *   get:
 *     description: Get all templates
 *     tags: [Templates]
 *     responses:
 *       200:
 *         description: Returns all templates
 */
router.route('/').get(templatesController.getAllSurveyTemplates);

/**
 * @swagger
 * /templates:
 *   post:
 *     description: Create a template
 *     tags: [Templates]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: number
 *                required: true
 *                description: The template name.
 *              summary:
 *                type: string
 *                required: false
 *                description: Info about the template.
 *              created_date:
 *                type: string
 *                format: date-time
 *                required: false
 *                description: Created date.
 *              updated_date:
 *                type: string
 *                format: date-time
 *                required: false
 *                description: Updated date.
 *              survey_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the new template.
 */
router.route('/').post(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the template must have minimum length of 3'),
  ],
  validate,
  templatesController.createASurveyTemplate
);

/**
 * @swagger
 * /templates/{id}:
 *   get:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Get a template by ID
 *     tags: [Templates]
 *     responses:
 *       201:
 *         description: Returns the template.
 */
router.route('/:id').get(templatesController.getASurveyTemplateById);

/**
 * @swagger
 * /templates/{id}:
 *   put:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The template ID
 *     description: Update a template by ID
 *     tags: [Templates]
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: number
 *                required: true
 *                description: The template name.
 *              summary:
 *                type: string
 *                required: false
 *                description: Info about the template.
 *              created_date:
 *                type: string
 *                format: date-time
 *                required: false
 *                description: Created date.
 *              updated_date:
 *                type: string
 *                format: date-time
 *                required: false
 *                description: Updated date.
 *              survey_type_id:
 *                type: number
 *                required: false
 *                description: The id of the survey type from the SurveyTypes table.
 *     responses:
 *       201:
 *         description: Returns the updated template.
 */
router.route('/:id').put(
  [
    body('name')
      .isString()
      .trim()
      .isLength({ min: 3 })
      .withMessage('The name of the template must have minimum length of 3'),
  ],
  validate,templatesController.updateASurveyTemplate
);

/**
 * @swagger
 * /templates/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The template ID
 *     description: Delete a template by ID
 *     tags: [Templates]
 *     responses:
 *       204:
 *         description: No content
 */
router.route('/:id').delete(templatesController.deleteASurveyTemplate);

export default router;