import { NextFunction, Request, Response } from 'express';
import { SurveyModel } from '../../models';

const getAllSurveys = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveys = await SurveyModel.getAllSurveys();
    return res.json(surveys);
  } catch (err) {
    next(err);
  }
};

const createASurvey = async (req: Request, res: Response) => {
  const survey = await SurveyModel.createASurvey(req.body);
  return res.json(survey);
};

const getSurveyById = async (req: Request, res: Response) => {
  const survey = await SurveyModel.getSurveyById(Number(req.params.id));
  return res.json(survey);
};

const updateASurvey = async (req: Request, res: Response) => {
  const survey = await SurveyModel.updateASurvey(Number(req.params.id), req.body);
  return res.json(survey);
};

const deleteASurvey = async (req: Request, res: Response) => {
  const survey = await SurveyModel.deleteASurvey(Number(req.params.id));
  return res.status(204).send(survey);
};

const getSurveysByType = async (req: Request, res: Response) => {
  const surveys = await SurveyModel.getSurveysByType(Number(req.params.type_id));
  return res.json(surveys);
};

const getSurveyMetadata = async (req: Request, res: Response) => {
  const surveyMetadata = await SurveyModel.getSurveyMetadata(Number(req.params.id));
  return res.json(surveyMetadata);
};

// Questions

const getSurveyQuestions = async (req: Request, res: Response) => {
  const surveyQuestions = await SurveyModel.getSurveyQuestions(Number(req.params.id));
  return res.json(surveyQuestions);
};

const createASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await SurveyModel.createASurveyQuestion(Number(req.params.id), req.body);
  return res.json(surveyQuestion);
};

const updateASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await SurveyModel.updateASurveyQuestion(Number(req.params.id), req.body);
  return res.json(surveyQuestion);
};

const deleteASurveyQuestion = async (req: Request, res: Response) => {
  const surveyQuestion = await SurveyModel.deleteASurveyQuestion(Number(req.params.id));
  return res.status(204).send(surveyQuestion);
};

// Recipients

const getAllRecipients = async (req: Request, res: Response) => {
  const surveyRecipients = await SurveyModel.getAllRecipients(Number(req.params.id));
  return res.json(surveyRecipients);
};

const getAllRecipientsByStatus = async (req: Request, res: Response) => {
  const surveyRecipients = await SurveyModel.getAllRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyRecipients);
};

const createARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await SurveyModel.createARecipient(Number(req.params.id), req.body);
  return res.json(surveyRecipient);
};

const updateARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await SurveyModel.updateARecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyRecipient);
};

const deleteARecipient = async (req: Request, res: Response) => {
  const surveyRecipient = await SurveyModel.deleteARecipient(Number(req.params.id), Number(req.params.recipient_id));
  return res.status(204).send(surveyRecipient);
};

// Employee Recipients

const getAllEmployeeRecipients = async (req: Request, res: Response) => {
  const surveyEmployeeRecipients = await SurveyModel.getAllEmployeeRecipients(Number(req.params.id));
  return res.json(surveyEmployeeRecipients);
};

const getAllEmployeeRecipientsByStatus = async (req: Request, res: Response) => {
  const surveyEmployeeRecipients = await SurveyModel.getAllEmployeeRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyEmployeeRecipients);
};  

const createAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await SurveyModel.createAnEmployeeRecipient(Number(req.params.id), req.body);
  return res.json(surveyEmployeeRecipient);
};

const updateAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await SurveyModel.updateAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyEmployeeRecipient);
};

const deleteAnEmployeeRecipient = async (req: Request, res: Response) => {
  const surveyEmployeeRecipient = await SurveyModel.deleteAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id));
  return res.status(204).send(surveyEmployeeRecipient);
};

// External Recipients

const getAllExternalRecipients = async (req: Request, res: Response) => {
  const surveyExternalRecipients = await SurveyModel.getAllExternalRecipients(Number(req.params.id));
  return res.json(surveyExternalRecipients);
};

const getAllExternalRecipientsStatus = async (req: Request, res: Response) => {
  const surveyExternalRecipients = await SurveyModel.getAllExternalRecipientsStatus(Number(req.params.id), Number(req.params.status_id));
  return res.json(surveyExternalRecipients);
};

const createAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await SurveyModel.createAnExternalRecipient(Number(req.params.id), req.body);
  return res.json(surveyExternalRecipient);
};

const updateAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await SurveyModel.updateAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
  return res.json(surveyExternalRecipient);
};

const deleteAnExternalRecipient = async (req: Request, res: Response) => {
  const surveyExternalRecipient = await SurveyModel.deleteAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id));
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