import { Router } from 'express';
import * as surveyTagsController from '../controllers/survey-tags';

const router = Router();

// Get all tags
router.route('/').get(surveyTagsController.getAllSurveyTags);

// Create a tag
router.route('/').post(surveyTagsController.createASurveyTag);

// Delete all tags
router.route('/').delete(surveyTagsController.deleteAllSurveyTags);

// Get a tag by id
router.route('/:id').get(surveyTagsController.getSurveyTagById);

// Update a tag by id
router.route('/:id').put(surveyTagsController.updateASurveyTag);

// Delete a tag by id
router.route('/:id').delete(surveyTagsController.deleteASurveyTag);

export default router;