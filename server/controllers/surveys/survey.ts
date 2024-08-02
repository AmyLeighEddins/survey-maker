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

const createASurvey = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const survey = await SurveyModel.createASurvey(req.body);
    return res.json(survey);
  } catch (err) {
    next(err);
  }
};

const getSurveyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const survey = await SurveyModel.getSurveyById(Number(req.params.id));
    return res.json(survey);
  } catch (err) {
    next(err);
  }
};

const updateASurvey = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const survey = await SurveyModel.updateASurvey(Number(req.params.id), req.body);
    return res.json(survey);
  } catch (err) {
    next(err);
  }
};

const deleteASurvey = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const survey = await SurveyModel.deleteASurvey(Number(req.params.id));
    return res.status(204).send(survey);
  } catch (err) {
    next(err);
  }
};

const getSurveysByType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveys = await SurveyModel.getSurveysByType(Number(req.params.type_id));
    return res.json(surveys);
  } catch (err) {
    next(err);
  }
};

const getSurveyMetadata = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyMetadata = await SurveyModel.getSurveyMetadata(Number(req.params.id));
    return res.json(surveyMetadata);
  } catch (err) {
    next(err);
  }
};

// Questions

const getSurveyQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestions = await SurveyModel.getSurveyQuestions(Number(req.params.id));
    return res.json(surveyQuestions);
  } catch (err) {
    next(err);
  }
};

const createASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyModel.createASurveyQuestion(Number(req.params.id), req.body);
    return res.json(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

const updateASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyModel.updateASurveyQuestion(Number(req.params.id), req.body);
    return res.json(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyModel.deleteASurveyQuestion(Number(req.params.id));
    return res.status(204).send(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

// Recipients

const getAllRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipients = await SurveyModel.getAllRecipients(Number(req.params.id));
    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllRecipientsByStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipients = await SurveyModel.getAllRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const createARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyModel.createARecipient(Number(req.params.id), req.body);
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const updateARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyModel.updateARecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyModel.deleteARecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

// Employee Recipients

const getAllEmployeeRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipients = await SurveyModel.getAllEmployeeRecipients(Number(req.params.id));
    return res.json(surveyEmployeeRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllEmployeeRecipientsByStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipients = await SurveyModel.getAllEmployeeRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyEmployeeRecipients);
  } catch (err) {
    next(err);
  }
};

const createAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyModel.createAnEmployeeRecipient(Number(req.params.id), req.body);
    return res.json(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

const updateAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyModel.updateAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyModel.deleteAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

// External Recipients

const getAllExternalRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipients = await SurveyModel.getAllExternalRecipients(Number(req.params.id));
    return res.json(surveyExternalRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllExternalRecipientsStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipients = await SurveyModel.getAllExternalRecipientsStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyExternalRecipients);
  } catch (err) {
    next(err);
  }
};

const createAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyModel.createAnExternalRecipient(Number(req.params.id), req.body);
    return res.json(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
};

const updateAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyModel.updateAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyModel.deleteAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
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