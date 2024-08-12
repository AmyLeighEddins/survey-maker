import { NextFunction, Request, Response } from 'express';
import { TemplateQuestionsModel } from '../../models';

const getTemplateQuestions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateQuestions = await TemplateQuestionsModel.getTemplateQuestions(Number(req.params.id));
    return res.json(templateQuestions);
  } catch (err) {
    next(err);
  }
};

const createATemplateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateQuestion = await TemplateQuestionsModel.createATemplateQuestion(Number(req.params.id), req.body);
    return res.json(templateQuestion);
  } catch (err) {
    next(err);
  }
};

const updateATemplateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateQuestion = await TemplateQuestionsModel.updateATemplateQuestion(Number(req.params.id), req.body, Number(req.params.question_id));
    return res.json(templateQuestion);
  } catch (err) {
    next(err);
  }
};

const deleteATemplateQuestion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const templateQuestion = await TemplateQuestionsModel.deleteATemplateQuestion(Number(req.params.id), Number(req.params.question_id));
    return res.status(204).send(templateQuestion);
  } catch (err) {
    next(err);
  }
};

export {
  getTemplateQuestions,
  createATemplateQuestion,
  updateATemplateQuestion,
  deleteATemplateQuestion,
};