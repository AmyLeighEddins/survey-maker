import { Request, Response } from 'express';
import { SurveyMetadataTypesModel } from '../../../models';

const getAllSurveyMetadataTypes = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.getAllSurveyMetadataTypes();
  return res.json(surveyMetadataTypes);
};

const createASurveyMetadataType = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.createASurveyMetadataType(req.body);
  return res.json(surveyMetadataTypes);
};

const deleteAllSurveyMetadataTypes = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.deleteAllSurveyMetadataTypes();
  return res.status(204).send(surveyMetadataTypes);
};

const getSurveyMetadataTypeById = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.getSurveyMetadataTypeById(Number(req.params.id));
  return res.json(surveyMetadataTypes);
};

const updateASurveyMetadataType = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.updateASurveyMetadataType(req.body);
  return res.json(surveyMetadataTypes);
};

const deleteASurveyMetadataType = async (req: Request, res: Response) => {
  const surveyMetadataTypes = await SurveyMetadataTypesModel.deleteASurveyMetadataType(Number(req.params.id));
  return res.status(204).send(surveyMetadataTypes);
};

export { getAllSurveyMetadataTypes, createASurveyMetadataType, deleteAllSurveyMetadataTypes, getSurveyMetadataTypeById, updateASurveyMetadataType, deleteASurveyMetadataType };