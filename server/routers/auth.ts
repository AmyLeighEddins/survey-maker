import { Router } from 'express';
import * as authController from '../controllers/auth';

const router = Router();

router.route('/').get(authController.getAllUsers);

router.route('/signup').post(authController.postSignUp);

router.route('/signin').post(authController.postSignIn);

// router.route('/:id').get(authController.getUserById);

export default router;