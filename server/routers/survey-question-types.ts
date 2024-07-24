import { Router } from 'express';
import * as surveyQuestionTypesController from '../controllers/survey-question-types';

const router = Router();

// Get all question types
router.route('/').get(surveyQuestionTypesController.getAllSurveyQuestionTypes);

// Create a question type
router.route('/').post(surveyQuestionTypesController.createASurveyQuestionType);

// Delete all question types
router.route('/').delete(surveyQuestionTypesController.deleteAllSurveyQuestionTypes);

// Get a question type by id
router.route('/:id').get(surveyQuestionTypesController.getSurveyQuestionTypeById);

// Update a question type by id
router.route('/:id').put(surveyQuestionTypesController.updateASurveyQuestionType);

// Delete a question type by id
router.route('/:id').delete(surveyQuestionTypesController.deleteASurveyQuestionType);

export default router;