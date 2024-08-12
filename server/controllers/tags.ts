import { NextFunction, Request, Response } from 'express';
import { SurveyTagsModel } from '../models';

const getAllSurveyTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyTagsModel.getAllSurveyTags();
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const createASurveyTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyTagsModel.createASurveyTag(req.body);
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const getSurveyTagById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyTagsModel.getSurveyTagById(Number(req.params.tag_id));
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const updateASurveyTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyTagsModel.updateASurveyTag(Number(req.params.tag_id), req.body);
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyTagsModel.deleteASurveyTag(Number(req.params.tag_id));
    return res.status(204).send(surveyTags);
  } catch (err) {
    next(err);
  }
};

export { getAllSurveyTags, createASurveyTag, getSurveyTagById, updateASurveyTag, deleteASurveyTag };