import { NextFunction, Request, Response } from 'express';
import { SurveyStatusesModel } from '../../models';

const getAllSurveyStatuses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyStatuses = await SurveyStatusesModel.getAllSurveyStatuses();
    return res.json(surveyStatuses);
  } catch (err) {
    next(err);
  }
};

const createASurveyStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyStatuses = await SurveyStatusesModel.createASurveyStatus(req.body);
    return res.json(surveyStatuses);
  } catch (err) {
    next(err);
  }
};

const getSurveyStatusById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyStatuses = await SurveyStatusesModel.getSurveyStatusById(Number(req.params.status_id));
    return res.json(surveyStatuses);
  } catch (err) {
    next(err);
  }
};

const updateASurveyStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyStatuses = await SurveyStatusesModel.updateASurveyStatus(Number(req.params.status_id), req.body);
    return res.json(surveyStatuses);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyStatuses = await SurveyStatusesModel.deleteASurveyStatus(Number(req.params.status_id));
    return res.status(204).send(surveyStatuses);
  } catch (err) {
    next(err);
  }
};

export { getAllSurveyStatuses, createASurveyStatus, getSurveyStatusById, updateASurveyStatus, deleteASurveyStatus };