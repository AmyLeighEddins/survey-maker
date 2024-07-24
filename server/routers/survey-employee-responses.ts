import { Router } from 'express';
import * as surveyEmployeeResponsesController from '../controllers/survey-employee-responses';

const router = Router();

// Get survey employee responses by recipient
router.route('/:recipient_id').get(surveyEmployeeResponsesController.getSurveyEmployeeResponseById);

// Create a survey employee response
router.route('/').post(surveyEmployeeResponsesController.createASurveyEmployeeResponse);

// Update a survey employee response
router.route('/:id').put(surveyEmployeeResponsesController.updateASurveyEmployeeResponse);

// Delete a survey employee response
router.route('/:id').delete(surveyEmployeeResponsesController.deleteASurveyEmployeeResponse);

export default router;