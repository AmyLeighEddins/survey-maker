import { Router } from 'express';
import * as exampleController from '../controllers/example';
import { body } from 'express-validator';
import { validate } from '../utils/validator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Example
 *   description: Example Tag
 */

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     tags: [Example]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.route('/').get(exampleController.getExamples);

router
  .route('/example')
  .post(
    [
      body('name')
        .isString()
        .trim()
        .isLength({ min: 3 })
        .withMessage('The name of the example must have minimum length of 3'),
    ],
    validate,
    exampleController.getExamples
  );

router.route('/users').get(exampleController.getAllUsers);

export default router;