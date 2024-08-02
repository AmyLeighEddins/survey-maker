import { Request, Response } from 'express';
import { SurveyExternalResponsesModel } from '../../../models';

const createASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await SurveyExternalResponsesModel.createASurveyExternalResponse(req.body);
  return res.json(surveyExternalResponses);
};

const getSurveyExternalResponseById = async (req: Request, res: Response) => {
  const surveyExternalResponses = await SurveyExternalResponsesModel.getSurveyExternalResponseById(Number(req.params.recipient_id));
  return res.json(surveyExternalResponses);
};

const updateASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await SurveyExternalResponsesModel.updateASurveyExternalResponse(req.body);
  return res.json(surveyExternalResponses);
};

const deleteASurveyExternalResponse = async (req: Request, res: Response) => {
  const surveyExternalResponses = await SurveyExternalResponsesModel.deleteASurveyExternalResponse(Number(req.params.id));
  return res.status(204).send(surveyExternalResponses);
};

export { createASurveyExternalResponse, getSurveyExternalResponseById, updateASurveyExternalResponse, deleteASurveyExternalResponse };