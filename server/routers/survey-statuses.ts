import { Router } from 'express';
import * as surveyStatusesController from '../controllers/survey-statuses';

const router = Router();

// Get all statuses
router.route('/').get(surveyStatusesController.getAllSurveyStatuses);

// Create a status
router.route('/').post(surveyStatusesController.createASurveyStatus);

// Delete all statuses
router.route('/').delete(surveyStatusesController.deleteAllSurveyStatuses);

// Get a status by id
router.route('/:id').get(surveyStatusesController.getSurveyStatusById);

// Update a status by id
router.route('/:id').put(surveyStatusesController.updateASurveyStatus);

// Delete a status by id
router.route('/:id').delete(surveyStatusesController.deleteASurveyStatus);

export default router;