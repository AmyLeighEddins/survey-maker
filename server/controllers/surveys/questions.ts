import { NextFunction, Request, Response } from 'express';
import { SurveyQuestionsModel } from '../../models';

const getSurveyQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestions = await SurveyQuestionsModel.getSurveyQuestions(Number(req.params.id));
    return res.json(surveyQuestions);
  } catch (err) {
    next(err);
  }
};

const createASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyQuestionsModel.createASurveyQuestion(Number(req.params.id), req.body);
    return res.json(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

const updateASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyQuestionsModel.updateASurveyQuestion(Number(req.params.id), req.body);
    return res.json(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyQuestion = await SurveyQuestionsModel.deleteASurveyQuestion(Number(req.params.id));
    return res.status(204).send(surveyQuestion);
  } catch (err) {
    next(err);
  }
};

export {
  getSurveyQuestions,
  createASurveyQuestion,
  updateASurveyQuestion,
  deleteASurveyQuestion,
};