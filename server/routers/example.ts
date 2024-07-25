import { Router } from 'express';
import * as exampleController from '../controllers/example';

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

export default router;