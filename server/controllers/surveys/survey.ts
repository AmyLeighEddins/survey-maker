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

export {
  getAllSurveys,
  createASurvey,
  getSurveyById,
  updateASurvey,
  deleteASurvey,
  getSurveysByType,
};