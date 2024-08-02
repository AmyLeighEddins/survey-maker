import { Request, Response } from 'express';
import { SurveyTypesModel } from '../../models';

const getAllSurveyTypes = async (req: Request, res: Response) => {
  const surveyTypes = await SurveyTypesModel.getAllSurveyTypes();
  return res.json(surveyTypes);
};

const createASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await SurveyTypesModel.createASurveyType(req.body);
  return res.json(surveyTypes);
};

const getSurveyTypeById = async (req: Request, res: Response) => {
  const surveyTypes = await SurveyTypesModel.getSurveyTypeById(Number(req.params.id));
  return res.json(surveyTypes);
};

const updateASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await SurveyTypesModel.updateASurveyType(Number(req.params.id), req.body);
  return res.json(surveyTypes);
};

const deleteASurveyType = async (req: Request, res: Response) => {
  const surveyTypes = await SurveyTypesModel.deleteASurveyType(Number(req.params.id));
  return res.status(204).send(surveyTypes);
};

export { getAllSurveyTypes, createASurveyType, getSurveyTypeById, updateASurveyType, deleteASurveyType };