import { NextFunction, Request, Response } from 'express';
import { SurveyEmployeeResponsesModel, SurveyExternalResponsesModel } from '../../models';
// TODO: figure out why this is causing build errors
// import { RecipientTypes } from '../../models/models';

const getSurveyResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyResponses;
    const survey_id = Number(req.params.id);
    const recipient_id = req.query.recipient_id ? Number(req.query.recipient_id) : undefined;
    const question_id = req.query.question_id ? Number(req.query.question_id) : undefined;

    if (req.query.recipient_type === 'employee') {
      surveyResponses = await SurveyEmployeeResponsesModel.getSurveyEmployeeResponses(survey_id, recipient_id, question_id);
    } else {
      surveyResponses = await SurveyExternalResponsesModel.getSurveyExternalResponses(survey_id, recipient_id, question_id);
    }

    return res.json(surveyResponses);
  } catch (error) {
    next(error);
  }
};

const createSurveyExternalResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recipient_id = Number(req.body.survey_external_recipient_id);
    const surveyResponse = await SurveyExternalResponsesModel.createSurveyExternalResponses(recipient_id, req.body.survey_response_items);
    return res.json({ surveyResponse });
  } catch (error) {
    next(error);
  }
};

const createSurveyEmployeeResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recipient_id = Number(req.body.survey_external_recipient_id);
    const surveyResponse = await SurveyEmployeeResponsesModel.createSurveyEmployeeResponses(recipient_id, req.body.survey_response_items);
    return res.json({ surveyResponse });
  } catch (error) {
    next(error);
  }
};

const updateSurveyExternalResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyResponseItems = await SurveyExternalResponsesModel.updateSurveyExternalResponses(req.body);
    return res.json(surveyResponseItems);
  } catch (error) {
    next(error);
  }
};

const updateSurveyEmployeeResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyResponseItems = await SurveyEmployeeResponsesModel.updateSurveyEmployeeResponses(req.body);
    return res.json(surveyResponseItems);
  } catch (error) {
    next(error);
  }
};

const deleteSurveyExternalResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recipient_id = Number(req.params.recipient_id);
    const surveyResponses = await SurveyExternalResponsesModel.deleteSurveyExternalResponses(recipient_id);
    return res.status(204).json(surveyResponses);
  } catch (error) {
    next(error);
  }
};

const deleteSurveyEmployeeResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recipient_id = Number(req.params.recipient_id);
    const surveyResponses = await SurveyEmployeeResponsesModel.deleteSurveyEmployeeResponses(recipient_id);
    return res.status(204).json(surveyResponses);
  } catch (error) {
    next(error);
  }
};

const deleteASurveyExternalResponseItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response_item_id = Number(req.params.response_id);
    const surveyResponseItem = await SurveyExternalResponsesModel.deleteASurveyExternalResponse(response_item_id);
    return res.status(204).send(surveyResponseItem);
  } catch (error) {
    next(error);
  }
};

const deleteASurveyEmployeeResponseItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response_item_id = Number(req.params.response_id);
    const surveyResponseItem = await SurveyEmployeeResponsesModel.deleteASurveyEmployeeResponse(response_item_id);
    return res.status(204).send(surveyResponseItem);
  } catch (error) {
    next(error);
  }
};

export {
  getSurveyResponses,
  createSurveyExternalResponses,
  createSurveyEmployeeResponses,
  updateSurveyExternalResponses,
  updateSurveyEmployeeResponses,
  deleteSurveyExternalResponses,
  deleteSurveyEmployeeResponses,
  deleteASurveyExternalResponseItem,
  deleteASurveyEmployeeResponseItem 
};