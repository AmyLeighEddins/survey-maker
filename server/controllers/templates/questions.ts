import { NextFunction, Request, Response } from 'express';
import { TemplateQuestionsModel } from '../../models';

const getTemplateQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templateQuestions = await TemplateQuestionsModel.getTemplateQuestions(
      Number(req.params.id)
    );
    return res.json(templateQuestions);
  } catch (err) {
    next(err);
  }
};

const createTemplateQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templateQuestion =
      await TemplateQuestionsModel.createTemplateQuestions(
        Number(req.params.id),
        req.body
      );
    return res.json(templateQuestion);
  } catch (err) {
    next(err);
  }
};

const updateTemplateQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templateQuestion =
      await TemplateQuestionsModel.updateTemplateQuestions(
        Number(req.params.id),
        req.body
      );
    return res.json(templateQuestion);
  } catch (err) {
    next(err);
  }
};

const deleteATemplateQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const templateQuestion =
      await TemplateQuestionsModel.deleteATemplateQuestion(
        Number(req.params.id),
        Number(req.params.question_id)
      );
    return res.status(204).send(templateQuestion);
  } catch (err) {
    next(err);
  }
};

export {
  getTemplateQuestions,
  createTemplateQuestions,
  updateTemplateQuestions,
  deleteATemplateQuestion,
};
