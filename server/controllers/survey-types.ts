import { Request, Response } from 'express';
import { surveyTypesModel } from '../models';

const getAllSurveyTypes = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.getAllSurveyTypes();
  return res.json(surveyTypes);
};

const createASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.createASurveyType(req.body);
  return res.json(surveyTypes);
};

const deleteAllSurveyTypes = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.deleteAllSurveyTypes();
  return res.status(204).send(surveyTypes);
};

const getSurveyTypeById = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.getSurveyTypeById(Number(req.params.id));
  return res.json(surveyTypes);
};

const updateASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.updateASurveyType(req.body);
  return res.json(surveyTypes);
};

const deleteASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await surveyTypesModel.deleteASurveyType(Number(req.params.id));
  return res.status(204).send(surveyTypes);
};

export { getAllSurveyTypes, createASurveyType, deleteAllSurveyTypes, getSurveyTypeById, updateASurveyType, deleteASurveyType };