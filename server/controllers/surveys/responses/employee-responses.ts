import { Request, Response } from 'express';
import { SurveyEmployeeResponsesModel } from '../../../models';

const createASurveyResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.createASurveyEmployeeResponse(req.body);
  return res.json(surveyEmployeeResponses);
};

const getSurveyResponses = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.getSurveyEmployeeResponseById(Number(req.params.recipient_id));
  return res.json(surveyEmployeeResponses);
};

const updateASurveyResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.updateASurveyEmployeeResponse(req.body);
  return res.json(surveyEmployeeResponses);
};

const deleteASurveyResponse = async (req: Request, res: Response) => {
  const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.deleteASurveyEmployeeResponse(Number(req.params.id));
  return res.status(204).send(surveyEmployeeResponses);
};

// const createASurveyEmployeeResponse = async (req: Request, res: Response) => {
//   const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.createASurveyEmployeeResponse(req.body);
//   return res.json(surveyEmployeeResponses);
// };

// const getSurveyEmployeeResponseById = async (req: Request, res: Response) => {
//   const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.getSurveyEmployeeResponseById(Number(req.params.recipient_id));
//   return res.json(surveyEmployeeResponses);
// };

// const updateASurveyEmployeeResponse = async (req: Request, res: Response) => {
//   const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.updateASurveyEmployeeResponse(req.body);
//   return res.json(surveyEmployeeResponses);
// };

// const deleteASurveyEmployeeResponse = async (req: Request, res: Response) => {
//   const surveyEmployeeResponses = await SurveyEmployeeResponsesModel.deleteASurveyEmployeeResponse(Number(req.params.id));
//   return res.status(204).send(surveyEmployeeResponses);
// };

export { createASurveyResponse, getSurveyResponses, updateASurveyResponse, deleteASurveyResponse };