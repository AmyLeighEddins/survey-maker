import { NextFunction, Request, Response } from 'express';
import { SurveyRecipientsModel } from '../../models';

// Recipients

const getAllRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipients = await SurveyRecipientsModel.getAllRecipients(Number(req.params.id));
    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllRecipientsByStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipients = await SurveyRecipientsModel.getAllRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const createARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyRecipientsModel.createARecipient(Number(req.params.id), req.body);
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const updateARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyRecipientsModel.updateARecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyRecipient = await SurveyRecipientsModel.deleteARecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

// Employee Recipients

const getAllEmployeeRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipients = await SurveyRecipientsModel.getAllEmployeeRecipients(Number(req.params.id));
    return res.json(surveyEmployeeRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllEmployeeRecipientsByStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipients = await SurveyRecipientsModel.getAllEmployeeRecipientsByStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyEmployeeRecipients);
  } catch (err) {
    next(err);
  }
};

const createAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyRecipientsModel.createAnEmployeeRecipient(Number(req.params.id), req.body);
    return res.json(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

const updateAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyRecipientsModel.updateAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnEmployeeRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyEmployeeRecipient = await SurveyRecipientsModel.deleteAnEmployeeRecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyEmployeeRecipient);
  } catch (err) {
    next(err);
  }
};

// External Recipients

const getAllExternalRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipients = await SurveyRecipientsModel.getAllExternalRecipients(Number(req.params.id));
    return res.json(surveyExternalRecipients);
  } catch (err) {
    next(err);
  }
};

const getAllExternalRecipientsStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipients = await SurveyRecipientsModel.getAllExternalRecipientsStatus(Number(req.params.id), Number(req.params.status_id));
    return res.json(surveyExternalRecipients);
  } catch (err) {
    next(err);
  }
};

const createAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyRecipientsModel.createAnExternalRecipient(Number(req.params.id), req.body);
    return res.json(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
};

const updateAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyRecipientsModel.updateAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id), req.body);
    return res.json(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnExternalRecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyExternalRecipient = await SurveyRecipientsModel.deleteAnExternalRecipient(Number(req.params.id), Number(req.params.recipient_id));
    return res.status(204).send(surveyExternalRecipient);
  } catch (err) {
    next(err);
  }
};

export {
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