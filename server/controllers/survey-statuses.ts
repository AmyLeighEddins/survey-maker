import { Request, Response } from 'express';
import { surveyStatusesModel } from '../models';

const getAllSurveyStatuses = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.getAllSurveyStatuses();
  return res.json(surveyStatuses);
};

const createASurveyStatus = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.createASurveyStatus(req.body);
  return res.json(surveyStatuses);
};

const deleteAllSurveyStatuses = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.deleteAllSurveyStatuses();
  return res.status(204).send(surveyStatuses);
};

const getSurveyStatusById = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.getSurveyStatusById(Number(req.params.id));
  return res.json(surveyStatuses);
};

const updateASurveyStatus = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.updateASurveyStatus(req.body);
  return res.json(surveyStatuses);
};

const deleteASurveyStatus = async (req: Request, res: Response) => {
  const surveyStatuses = await surveyStatusesModel.deleteASurveyStatus(Number(req.params.id));
  return res.status(204).send(surveyStatuses);
};

export { getAllSurveyStatuses, createASurveyStatus, deleteAllSurveyStatuses, getSurveyStatusById, updateASurveyStatus, deleteASurveyStatus };