import { NextFunction, Request, Response } from 'express';
import { SurveyRecipientsModel } from '../../models';

const getAllRecipients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyRecipients;
    const status = req.query.status ? Number(req.query.status) : undefined;
    const id = Number(req.params.id);

    if (req.query.type === 'employee') {
      surveyRecipients = await SurveyRecipientsModel.getAllEmployeeRecipients(id, status);
    } else if (req.query.type === 'external') {
      surveyRecipients = await SurveyRecipientsModel.getAllExternalRecipients(id, status);
    } else {
      surveyRecipients = await SurveyRecipientsModel.getAllRecipients(id, status);
    }
    return res.json(surveyRecipients);
  } catch (err) {
    next(err);
  }
};

const createARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyRecipient;
    const id = Number(req.params.id);

    console.log(id, req.body);

    if (req.query.type === 'employee') {
      surveyRecipient = await SurveyRecipientsModel.createAnEmployeeRecipient(id, req.body);
    } else {
      surveyRecipient = await SurveyRecipientsModel.createAnExternalRecipient(id, req.body);
    }
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const updateARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyRecipient;
    const id = Number(req.params.id);
    const recipient_id = Number(req.params.recipient_id);

    if (req.query.type === 'employee') {
      surveyRecipient = await SurveyRecipientsModel.updateAnEmployeeRecipient(id, recipient_id, req.body);
    } else {
      surveyRecipient = await SurveyRecipientsModel.updateAnExternalRecipient(id, recipient_id, req.body);
    }
    return res.json(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

const deleteARecipient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyRecipient;
    const id = Number(req.params.id);
    const recipient_id = Number(req.params.recipient_id);

    if (req.query.type === 'employee') {
      surveyRecipient = await SurveyRecipientsModel.deleteAnEmployeeRecipient(id, recipient_id);
    } else {
      surveyRecipient = await SurveyRecipientsModel.deleteAnExternalRecipient(id, recipient_id);
    }
    return res.status(204).send(surveyRecipient);
  } catch (err) {
    next(err);
  }
};

export {
  getAllRecipients,
  createARecipient,
  updateARecipient,
  deleteARecipient,
};