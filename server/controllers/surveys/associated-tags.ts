import { NextFunction, Request, Response } from 'express';
import { SurveyAssociatedTagsModel } from '../../models';

const getSurveyAssociatedTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags = await SurveyAssociatedTagsModel.getSurveyAssociatedTags(
      Number(req.params.id)
    );
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const createSurveyAssociatedTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await SurveyAssociatedTagsModel.createSurveyAssociatedTags(
        Number(req.params.id),
        req.body
      );
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const updateSurveyAssociatedTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await SurveyAssociatedTagsModel.updateSurveyAssociatedTags(
        Number(req.params.id),
        req.body
      );
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const deleteASurveyAssociatedTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await SurveyAssociatedTagsModel.deleteASurveyAssociatedTag(
        Number(req.params.id),
        Number(req.params.associated_tag_id)
      );
    return res.status(204).send(surveyTags);
  } catch (err) {
    next(err);
  }
};

export {
  getSurveyAssociatedTags,
  createSurveyAssociatedTags,
  updateSurveyAssociatedTags,
  deleteASurveyAssociatedTag,
};
