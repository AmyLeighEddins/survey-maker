import { Request, Response } from 'express';
import { surveyModel } from '../models';

const getAllSurveys = async (req: Request, res: Response) => {
  const surveys = await surveyModel.getAllSurveys();
  return res.json(surveys);
};

const createASurvey = async (req: Request, res: Response) => {
  const survey = await surveyModel.createASurvey(req.body);
  return res.json(survey);
};

const getSurveyById = async (req: Request, res: Response) => {
  const survey = await surveyModel.getSurveyById(Number(req.params.id));
  return res.json(survey);
};

const updateASurvey = async (req: Request, res: Response) => {
  const survey = await surveyModel.updateASurvey(Number(req.params.id), req.body);
  return res.json(survey);
};

const deleteASurvey = async (req: Request, res: Response) => {
  const survey = await surveyModel.deleteASurvey(Number(req.params.id));
  return res.status(204).send(survey);
};

const getSurveysByType = async (req: Request, res: Response) => {
  const surveys = await surveyModel.getSurveysByType(Number(req.params.type_id));
  return res.json(surveys);
};

const getSurveyMetadata = async (req: Request, res: Response) => {
  const surveyMetadata = await surveyModel.getSurveyMetadata(Number(req.params.id));
  return res.json(surveyMetadata);
};

// Questions

const getSurveyQuestions = async (req: Request, res: Response) => {
  const surveyQuestions = await surveyModel.getSurveyQuestions(Number(req.params.id));
  return res.json(surveyQuestions);
};

const createASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await surveyModel.createASurveyQuestion(Number(req.params.id), req.body);
  return res.json(surveyQuestion);
};

const updateASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await surveyModel.updateASurveyQuestion(Number(req.params.id), req.body);
  return res.json(surveyQuestion);
};

const deleteASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await surveyModel.deleteASurveyQuestion(Number(req.params.id));
  return res.status(204).send(surveyQuestion);
};

// Recipients

const getAllRecipients = async (req: Request, res: Response) => {
  const surveyRecipients = await surveyModel.getAllRecipients(Number(req.params.id));
  return res.json(surveyRecipients);
};

const getAllRecipientsByStatus = async (req: Request, res: Response) => {
  const surveyRecipients = await surveyModel.getAllRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyRecipients);
};

const createARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await surveyModel.createARecipient(Number(req.params.id), req.body);
  return res.json(surveyRecipient);
};

const updateARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await surveyModel.updateARecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyRecipient);
};

const deleteARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await surveyModel.deleteARecipient(Number(req.params.id), Number(req.params.recipient_id));
  return res.status(204).send(surveyRecipient);
};

// Employee Recipients

const getAllEmployeeRecipients = async (req: Request, res: Response) => {
  const surveyEmployeeRecipients = await surveyModel.getAllEmployeeRecipients(Number(req.params.id));
  return res.json(surveyEmployeeRecipients);
};

const getAllEmployeeRecipientsByStatus = async (req: Request, res: Response) => {
  const surveyEmployeeRecipients = await surveyModel.getAllEmployeeRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyEmployeeRecipients);
};  

const createAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await surveyModel.createAnEmployeeRecipient(Number(req.params.id), req.body);
  return res.json(surveyEmployeeRecipient);
};

const updateAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await surveyModel.updateAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyEmployeeRecipient);
};

const deleteAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await surveyModel.deleteAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id));
  return res.status(204).send(surveyEmployeeRecipient);
};

// External Recipients

const getAllExternalRecipients = async (req: Request, res: Response) => {
  const surveyExternalRecipients = await surveyModel.getAllExternalRecipients(Number(req.params.id));
  return res.json(surveyExternalRecipients);
};

const getAllExternalRecipientsStatus = async (req: Request, res: Response) => {
  const surveyExternalRecipients = await surveyModel.getAllExternalRecipientsStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyExternalRecipients);
};

const createAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await surveyModel.createAnExternalRecipient(Number(req.params.id), req.body);
  return res.json(surveyExternalRecipient);
};

const updateAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await surveyModel.updateAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyExternalRecipient);
};

const deleteAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await surveyModel.deleteAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id));
  return res.status(204).send(surveyExternalRecipient);
};

export {
  getAllSurveys,
  createASurvey,
  getSurveyById,
  updateASurvey,
  deleteASurvey,
  getSurveysByType,
  getSurveyMetadata,
  getSurveyQuestions,
  createASurveyQuestion,
  updateASurveyQuestion,
  deleteASurveyQuestion,
  getAllRecipients,
  getAllRecipientsByStatus,
  createARecipient,
  updateARecipient,
  deleteARecipient,
  getAllEmployeeRecipients,
  getAllEmployeeRecipientsByStatus,
  createAnEmployeeRecipient,
  updateAnEmployeeRecipient,
  deleteAnEmployeeRecipient,
  getAllExternalRecipients,
  getAllExternalRecipientsStatus,
  createAnExternalRecipient,
  updateAnExternalRecipient,
  deleteAnExternalRecipient
};