import { Request, Response } from 'express';
import { surveyResponseItemsModel } from '../models';

const getSurveyResponseItemsByQuestion = async (req: Request, res: Response) => {
  const surveyResponseItems = await surveyResponseItemsModel.getSurveyResponseItemsByQuestion(Number(req.params.question_id));
  return res.json(surveyResponseItems);
};

export { getSurveyResponseItemsByQuestion };