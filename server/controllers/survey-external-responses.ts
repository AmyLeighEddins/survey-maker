import { Request, Response } from 'express';
import { surveyExternalResponsesModel } from '../models';

const createASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await surveyExternalResponsesModel.createASurveyExternalResponse(req.body);
  return res.json(surveyExternalResponses);
};

const getSurveyExternalResponseById = async (req: Request, res: Response) => {
  const surveyExternalResponses = await surveyExternalResponsesModel.getSurveyExternalResponseById(Number(req.params.recipient_id));
  return res.json(surveyExternalResponses);
};

const updateASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await surveyExternalResponsesModel.updateASurveyExternalResponse(req.body);
  return res.json(surveyExternalResponses);
};

const deleteASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await surveyExternalResponsesModel.deleteASurveyExternalResponse(Number(req.params.id));
  return res.status(204).send(surveyExternalResponses);
};

export { createASurveyExternalResponse, getSurveyExternalResponseById, updateASurveyExternalResponse, deleteASurveyExternalResponse };