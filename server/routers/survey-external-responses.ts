import { Router } from 'express';
import * as surveyExternalResponsesController from '../controllers/survey-external-responses';

const router = Router();

// Get survey external responses by recipient
router.route('/:recipient_id').get(surveyExternalResponsesController.getSurveyExternalResponseById);

// Create a survey external response
router.route('/').post(surveyExternalResponsesController.createASurveyExternalResponse);

// Update a survey external response
router.route('/:id').put(surveyExternalResponsesController.updateASurveyExternalResponse);

// Delete a survey external response
router.route('/:id').delete(surveyExternalResponsesController.deleteASurveyExternalResponse);

export default router;