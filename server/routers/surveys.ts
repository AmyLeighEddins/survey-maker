import { Router } from 'express';
import * as surveyController from '../controllers/survey';

const router = Router();

// Get all surveys
router.route('/').get(surveyController.getAllSurveys);

// Create a survey
router.route('/').post(surveyController.createASurvey);

// Update all surveys
router.route('/').put(surveyController.updateAllSurveys);

// Delete all surveys
router.route('/').delete(surveyController.deleteAllSurveys);

// Get a survey by id
router.route('/:id').get(surveyController.getSurveyById);

// Update a survey by id
router.route('/:id').put(surveyController.updateASurvey);

// Delete a survey by id
router.route('/:id').delete(surveyController.deleteASurvey);

// Get surveys by type
router.route('/:type_id').get(surveyController.getSurveysByType);

// Get metadata for a survey
router.route('/:id/survey-metadata').get(surveyController.getSurveyMetadata);

// Questions

// Get all questions for a survey
router.route('/:id/questions').get(surveyController.getSurveyQuestions);

// Create a question for a survey
router.route('/:id/questions').post(surveyController.createASurveyQuestion);

// Update a question for a survey
router.route('/:id/questions/:question_id').put(surveyController.updateASurveyQuestion);

// Delete a question for a survey
router.route('/:id/questions/:question_id').delete(surveyController.deleteASurveyQuestion);

// Employee Recipients

// Get all employee recipients for a survey
router.route('/:id/employee-recipients').get(surveyController.getAllEmployeeRecipients);

// Get survey employee recipients by status (get all completed or incomplete)
router.route('/:id/employee-recipients/:status_id').get(surveyController.getAllEmployeeRecipientsByStatus);

// Create an employee recipient for a survey
router.route('/:id/employee-recipients').post(surveyController.createAnEmployeeRecipient);

// Update an employee recipient for a survey
router.route('/:id/employee-recipients/:recipient_id').put(surveyController.updateAnEmployeeRecipient);

// Delete an employee recipient for a survey
router.route('/:id/employee-recipients/:recipient_id').delete(surveyController.deleteAnEmployeeRecipient);

// External Recipients

// Get all external recipients for a survey
router.route('/:id/external-recipients').get(surveyController.getAllExternalRecipients);

// Get survey external recipients by status (get all completed or incomplete)
router.route('/:id/external-recipients/:status_id').get(surveyController.getAllExternalRecipientsStatus);

// Create an external recipient for a survey
router.route('/:id/external-recipients').post(surveyController.createAnExternalRecipient);

// Update an external recipient for a survey
router.route('/:id/external-recipients/:recipient_id').put(surveyController.updateAnExternalRecipient);

// Delete an external recipient for a survey
router.route('/:id/external-recipients/:recipient_id').delete(surveyController.deleteAnExternalRecipient);

export default router;