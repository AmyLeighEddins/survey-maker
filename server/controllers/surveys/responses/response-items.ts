import { Request, Response } from 'express';
import { SurveyResponseItemsModel } from '../../../models';

const getSurveyResponseItemsByQuestion = async (req: Request, res: Response) => {
  const surveyResponseItems = await SurveyResponseItemsModel.getSurveyResponseItemsByQuestion(Number(req.params.question_id));
  return res.json(surveyResponseItems);
};

export { getSurveyResponseItemsByQuestion };