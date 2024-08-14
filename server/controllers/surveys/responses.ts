import { NextFunction, Request, Response } from 'express';
import { SurveyEmployeeResponsesModel, SurveyExternalResponsesModel, SurveyResponseItemsModel } from '../../models';
// TODO: figure out why this is causing build errors
// import { RecipientTypes } from '../../models/models';

const getSurveyResponses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyResponses;
    const recipient_id = Number(req.query.recipient_id);

    if (req.query.recipient_type === 'employee') {
      surveyResponses = await SurveyEmployeeResponsesModel.getSurveyEmployeeResponseByRecipientId(recipient_id);
    } else {
      surveyResponses = await SurveyExternalResponsesModel.getSurveyExternalResponseByRecipientId(recipient_id);
    }
    // TODO: add call to get survey response items by survey if there is no question id
    const surveyResponseItems = await SurveyResponseItemsModel.getSurveyResponseItemsByQuestion(Number(req.query.question_id));
    // TODO: add filter for get all responses to filter by question id
    // if (surveyResponses && req.query.question_id) {
    //   surveyResponses = surveyResponses.filter(response => response.survey_response_item_id === Number(req.query.question_id));
    // }
    return res.json({ surveyResponses, surveyResponseItems });
  } catch (error) {
    next(error);
  }
};

const createASurveyResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyResponse;
    if (req.query.survey_external_recipient_id) {
      surveyResponse = await SurveyExternalResponsesModel.createASurveyExternalResponse(req.body);
    } else {
      surveyResponse = await SurveyEmployeeResponsesModel.createASurveyEmployeeResponse(req.body);
    }
    const surveyResponseItem = await SurveyResponseItemsModel.createASurveyResponseItem(req.body);
    return res.json({ surveyResponse, surveyResponseItem });
  } catch (error) {
    next(error);
  }
};

const updateASurveyResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyResponse;
    const id = Number(req.params.id);

    if (req.query.survey_external_recipient_id) {
      surveyResponse = await SurveyExternalResponsesModel.updateASurveyExternalResponse(id, req.body);
    } else {
      surveyResponse = await SurveyEmployeeResponsesModel.updateASurveyEmployeeResponse(id, req.body);
    }
    const surveyResponseItem = await SurveyResponseItemsModel.updateASurveyResponseItem(Number(req.body.survey_response_item_id), req.body);
    return res.json({ surveyResponse, surveyResponseItem });
  } catch (error) {
    next(error);
  }
};

const deleteASurveyResponse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let surveyResponse;
    const id = Number(req.params.id);

    if (req.query.survey_external_recipient_id) {
      surveyResponse = await SurveyExternalResponsesModel.deleteASurveyExternalResponse(id);
    } else {
      surveyResponse = await SurveyEmployeeResponsesModel.deleteASurveyEmployeeResponse(id);
    }
    const surveyResponseItem = await SurveyResponseItemsModel.deleteASurveyResponseItem(Number(req.body.survey_response_item_id));
    return res.status(204).send({ surveyResponse, surveyResponseItem });
  } catch (error) {
    next(error);
  }
};

export { getSurveyResponses, createASurveyResponse, updateASurveyResponse, deleteASurveyResponse };