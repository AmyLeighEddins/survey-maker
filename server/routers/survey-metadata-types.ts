import { Router } from 'express';
import * as surveyMetadataTypesController from '../controllers/survey-metadata-types';

const router = Router();

// Get all metadata types
router.route('/').get(surveyMetadataTypesController.getAllSurveyMetadataTypes);

// Create a metadata type
router.route('/').post(surveyMetadataTypesController.createASurveyMetadataType);

// Delete all metadata types
router.route('/').delete(surveyMetadataTypesController.deleteAllSurveyMetadataTypes);

// Get a metadata type by id
router.route('/:id').get(surveyMetadataTypesController.getSurveyMetadataTypeById);

// Update a metadata type by id
router.route('/:id').put(surveyMetadataTypesController.updateASurveyMetadataType);

// Delete a metadata type by id
router.route('/:id').delete(surveyMetadataTypesController.deleteASurveyMetadataType);

export default router;