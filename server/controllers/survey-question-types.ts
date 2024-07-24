import { Request, Response } from 'express';
import { surveyQuestionTypesModel } from '../models';

const getAllSurveyQuestionTypes = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.getAllSurveyQuestionTypes();
  return res.json(surveyQuestionTypes);
};

const createASurveyQuestionType = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.createASurveyQuestionType(req.body);
  return res.json(surveyQuestionTypes);
};

const deleteAllSurveyQuestionTypes = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.deleteAllSurveyQuestionTypes();
  return res.status(204).send(surveyQuestionTypes);
};

const getSurveyQuestionTypeById = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.getSurveyQuestionTypeById(Number(req.params.id));
  return res.json(surveyQuestionTypes);
};

const updateASurveyQuestionType = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.updateASurveyQuestionType(req.body);
  return res.json(surveyQuestionTypes);
};

const deleteASurveyQuestionType = async (req: Request, res: Response) => {
  const surveyQuestionTypes = await surveyQuestionTypesModel.deleteASurveyQuestionType(Number(req.params.id));
  return res.status(204).send(surveyQuestionTypes);
};

export { getAllSurveyQuestionTypes, createASurveyQuestionType, deleteAllSurveyQuestionTypes, getSurveyQuestionTypeById, updateASurveyQuestionType, deleteASurveyQuestionType };