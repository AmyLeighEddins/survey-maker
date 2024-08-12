import { NextFunction, Request, Response } from 'express';
import { SurveyAssociatedTagsModel } from '../../models';

const getSurveyAssociatedTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyAssociatedTagsModel.getSurveyAssociatedTags(Number(req.params.id));
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const createASurveyAssociatedTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyAssociatedTagsModel.createASurveyAssociatedTag(Number(req.params.id), req.body);
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const updateASurveyAssociatedTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyAssociatedTagsModel.updateASurveyAssociatedTag(Number(req.params.id), req.body, Number(req.params.associated_tag_id));
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyAssociatedTag = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const surveyTags = await SurveyAssociatedTagsModel.deleteASurveyAssociatedTag(Number(req.params.id), Number(req.params.associated_tag_id));
    return res.status(204).send(surveyTags);
  } catch (err) {
    next(err);
  }
};

export {
  getSurveyAssociatedTags,
  createASurveyAssociatedTag,
  updateASurveyAssociatedTag,
  deleteASurveyAssociatedTag,
};