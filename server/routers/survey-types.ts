import { Router } from 'express';
import * as surveyTypesController from '../controllers/survey-types';

const router = Router();

// Get all types
router.route('/').get(surveyTypesController.getAllSurveyTypes);

// Create a type
router.route('/').post(surveyTypesController.createASurveyType);

// Delete all types
router.route('/').delete(surveyTypesController.deleteAllSurveyTypes);

// Get a type by id
router.route('/:id').get(surveyTypesController.getSurveyTypeById);

// Update a type by id
router.route('/:id').put(surveyTypesController.updateASurveyType);

// Delete a type by id
router.route('/:id').delete(surveyTypesController.deleteASurveyType);

export default router;