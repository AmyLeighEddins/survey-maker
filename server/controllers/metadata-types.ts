import { NextFunction, Request, Response } from 'express';
import { SurveyMetadataTypesModel } from '../models';

const getAllSurveyMetadataTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadataTypes = await SurveyMetadataTypesModel.getAllSurveyMetadataTypes();
    return res.json(surveyMetadataTypes);
  } catch (err) {
    next(err);
  }
};

const createASurveyMetadataType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadataTypes = await SurveyMetadataTypesModel.createASurveyMetadataType(req.body);
    return res.json(surveyMetadataTypes);
  } catch (err) {
    next(err);
  }
};

const getSurveyMetadataTypeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadataTypes = await SurveyMetadataTypesModel.getSurveyMetadataTypeById(Number(req.params.type_id));
    return res.json(surveyMetadataTypes);
  } catch (err) {
    next(err);
  }
};

const updateASurveyMetadataType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadataTypes = await SurveyMetadataTypesModel.updateASurveyMetadataType(Number(req.params.type_id), req.body);
    return res.json(surveyMetadataTypes);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyMetadataType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadataTypes = await SurveyMetadataTypesModel.deleteASurveyMetadataType(Number(req.params.type_id));
    return res.status(204).send(surveyMetadataTypes);
  } catch (err) {
    next(err);
  }
};

export { getAllSurveyMetadataTypes, createASurveyMetadataType, getSurveyMetadataTypeById, updateASurveyMetadataType, deleteASurveyMetadataType };