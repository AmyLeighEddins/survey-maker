import { Router } from 'express';
import * as exampleController from '../controllers/example';

const router = Router();

router.route('/').get(exampleController.getExamples);

export default router;