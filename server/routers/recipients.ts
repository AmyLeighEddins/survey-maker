import { Router } from 'express';
import { recipientsController } from '../controllers';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Recipients
 *   description: Recipients
 */

/**
 * @swagger
 * /recipients/external:
 *   get:
 *     description: Get all external recipients
 *     tags: [Recipients]
 *     responses:
 *       200:
 *         description: Returns all external survey recipients
 */
router.route('/external').get(recipientsController.getAllExternalRecipients);

/**
 * @swagger
 * /recipients/employee:
 *   get:
 *     description: Get all employee recipients
 *     tags: [Recipients]
 *     responses:
 *       200:
 *         description: Returns all employee survey recipients
 */
router.route('/employee').get(recipientsController.getAllEmployeeRecipients);

export default router;
