import { Router } from 'express';
import * as surveyResponseItemsController from '../controllers/survey-response-items';

const router = Router();

// Get all survey responses by question
router.route('/:question_id').get(surveyResponseItemsController.getSurveyResponseItemsByQuestion);

export default router;