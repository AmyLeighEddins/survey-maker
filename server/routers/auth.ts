import { Router } from 'express';
import * as authController from '../controllers/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *                description: Name of the user.
 *              email:
 *                type: string
 *                required: true
 *                description: Email address.
 *              password:
 *                type: string
 *                required: true
 *                description: Password.
 *     description: Sign up a new user.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns an access token.
 */
router.route('/signup').post(authController.postSignUp);

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                required: true
 *                description: Email address.
 *              password:
 *                type: string
 *                required: true
 *                description: Password.
 *     description: Sign up a new user.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns an access token.
 */
router.route('/signin').post(authController.postSignIn);

export default router;