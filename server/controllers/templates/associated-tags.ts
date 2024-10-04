import { NextFunction, Request, Response } from 'express';
import { TemplateAssociatedTagsModel } from '../../models';

const getTemplateAssociatedTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await TemplateAssociatedTagsModel.getTemplateAssociatedTags(
        Number(req.params.id)
      );
    return res.json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const createTemplateAssociatedTags = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await TemplateAssociatedTagsModel.createTemplateAssociatedTags(
        Number(req.params.id),
        req.body
      );
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const updateATemplateAssociatedTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await TemplateAssociatedTagsModel.updateATemplateAssociatedTag(
        Number(req.params.id),
        req.body,
        Number(req.params.associated_tag_id)
      );
    return res.status(201).json(surveyTags);
  } catch (err) {
    next(err);
  }
};

const deleteATemplateAssociatedTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const surveyTags =
      await TemplateAssociatedTagsModel.deleteATemplateAssociatedTag(
        Number(req.params.id),
        Number(req.params.associated_tag_id)
      );
    return res.status(204).send(surveyTags);
  } catch (err) {
    next(err);
  }
};

export {
  getTemplateAssociatedTags,
  createTemplateAssociatedTags,
  updateATemplateAssociatedTag,
  deleteATemplateAssociatedTag,
};
