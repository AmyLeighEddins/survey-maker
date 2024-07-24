import { Request, Response } from 'express';
import { surveyEmployeeResponsesModel } from '../models';

const createASurveyEmployeeResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await surveyEmployeeResponsesModel.createASurveyEmployeeResponse(req.body);
  return res.json(surveyEmployeeResponses);
};

const getSurveyEmployeeResponseById = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await surveyEmployeeResponsesModel.getSurveyEmployeeResponseById(Number(req.params.recipient_id));
  return res.json(surveyEmployeeResponses);
};

const updateASurveyEmployeeResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await surveyEmployeeResponsesModel.updateASurveyEmployeeResponse(req.body);
  return res.json(surveyEmployeeResponses);
};

const deleteASurveyEmployeeResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await surveyEmployeeResponsesModel.deleteASurveyEmployeeResponse(Number(req.params.id));
  return res.status(204).send(surveyEmployeeResponses);
};

export { createASurveyEmployeeResponse, getSurveyEmployeeResponseById, updateASurveyEmployeeResponse, deleteASurveyEmployeeResponse };