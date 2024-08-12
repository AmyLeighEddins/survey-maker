import { NextFunction, Request, Response } from 'express';
import { SurveyMetadataModel, SurveyModel } from '../../models';

const getSurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyMetadataModel.getSurveyMetadata(Number(req.params.id));
    return res.json(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

const createASurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyMetadataModel.createASurveyMetadata(Number(req.params.id), req.body);
    return res.status(201).json(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

const updateASurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyMetadataModel.updateASurveyMetadata(Number(req.params.id), req.body, Number(req.params.metadata_id));
    return res.status(201).json(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyMetadataModel.deleteASurveyMetadata(Number(req.params.id), Number(req.params.metadata_id));
    return res.status(204).send(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

export {
  getSurveyMetadata,
  createASurveyMetadata,
  updateASurveyMetadata,
  deleteASurveyMetadata,
};