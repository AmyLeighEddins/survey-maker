import { NextFunction, Request, Response } from 'express';
import { SurveyRecipientsModel } from '../../models';

// Employee Recipients

const getAllEmployeeRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const status = req.query.status ? Number(req.query.status) : undefined;
    const surveyRecipients =
      await SurveyRecipientsModel.getAllEmployeeRecipients(survey_id, status);

    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const createEmployeeRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const surveyRecipient =
      await SurveyRecipientsModel.createEmployeeRecipients(survey_id, req.body);

    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const updateEmployeeRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const surveyRecipient =
      await SurveyRecipientsModel.updateEmployeeRecipients(
        survey_id,
        req.body
      );

    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnEmployeeRecipient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const recipient_id = Number(req.params.recipient_id);
    const surveyRecipient =
      await SurveyRecipientsModel.deleteAnEmployeeRecipient(
        survey_id,
        recipient_id
      );

    return res.status(204).send(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

// External Recipients

const getAllExternalRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const status = req.query.status ? Number(req.query.status) : undefined;
    const surveyRecipients =
      await SurveyRecipientsModel.getAllExternalRecipients(survey_id, status);

    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const createExternalRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const surveyRecipient =
      await SurveyRecipientsModel.createExternalRecipients(survey_id, req.body);

    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const updateExternalRecipients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const surveyRecipient =
      await SurveyRecipientsModel.updateExternalRecipients(
        survey_id,
        req.body
      );

    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteAnExternalRecipient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const survey_id = Number(req.params.id);
    const recipient_id = Number(req.params.recipient_id);
    const surveyRecipient =
      await SurveyRecipientsModel.deleteAnExternalRecipient(
        survey_id,
        recipient_id
      );

    return res.status(204).send(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

export {
  getAllExternalRecipients,
  getAllEmployeeRecipients,
  createExternalRecipients,
  createEmployeeRecipients,
  updateExternalRecipients,
  updateEmployeeRecipients,
  deleteAnExternalRecipient,
  deleteAnEmployeeRecipient,
};
