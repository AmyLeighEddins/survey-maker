import { Router } from 'express';
import * as surveyTemplatesController from '../controllers/survey-templates';

const router = Router();

// Get all templates
router.route('/').get(surveyTemplatesController.getAllSurveyTemplates);

// Create a template
router.route('/').post(surveyTemplatesController.createASurveyTemplate);

// Update all templates
router.route('/').put(surveyTemplatesController.updateAllSurveyTemplates);

// Delete all templates
router.route('/').delete(surveyTemplatesController.deleteAllSurveyTemplates);

// Get a template by id
router.route('/:id').get(surveyTemplatesController.getASurveyTemplateById);

// Get a template by type
router.route('/:type_id').get(surveyTemplatesController.getASurveyTemplateByType);

// Get a user's templates
// router.route('/:user_id').get(surveyTemplatesController.getASurveyTemplateByUser);

// Update a template
router.route('/:id').put(surveyTemplatesController.updateASurveyTemplate);

// Delete a template
router.route('/:id').delete(surveyTemplatesController.deleteASurveyTemplate);

// Questions

// Get all questions for a template
router.route('/:id/questions').get(surveyTemplatesController.getAllTemplateQuestions);

// Create a question for a template
router.route('/:id/questions').post(surveyTemplatesController.createATemplateQuestion);

// Get a template question by id
router.route('/:id/questions/:question_id').get(surveyTemplatesController.getATemplateQuestion);

// Update a question for a template
router.route('/:id/questions/:question_id').put(surveyTemplatesController.updateATemplateQuestion);

// Delete a question for a template
router.route('/:id/questions/:question_id').delete(surveyTemplatesController.deleteATemplateQuestion);

export default router;