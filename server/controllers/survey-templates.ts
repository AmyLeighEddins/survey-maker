import { Request, Response } from 'express';
import { surveyModel, surveyTemplatesModel } from '../models';

const getAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await surveyTemplatesModel.getAllSurveyTemplates();
  return res.json(surveyTemplates);
};

const createASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await surveyTemplatesModel.createASurveyTemplate(req.body);
  return res.json(surveyTemplate);
};

const updateAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await surveyTemplatesModel.updateAllSurveyTemplates(req.body);
  return res.json(surveyTemplates);
};

const deleteAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await surveyTemplatesModel.deleteAllSurveyTemplates();
  return res.status(204).send(surveyTemplates);
};

const getASurveyTemplateById = async (req: Request, res: Response) => {
  const surveyTemplate = await surveyTemplatesModel.getASurveyTemplateById(Number(req.params.id));
  return res.json(surveyTemplate);
};

const getASurveyTemplateByType = async (req: Request, res: Response) => {
  const surveyTemplate = await surveyTemplatesModel.getASurveyTemplateByType(Number(req.params.type_id));
  return res.json(surveyTemplate);
};

const getSurveyTemplateMetadata = async (req: Request, res: Response) => {
  const surveyMetadata = await surveyModel.getSurveyMetadata(Number(req.params.id));
  return res.json(surveyMetadata);
};

const updateASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await surveyTemplatesModel.updateASurveyTemplate(req.body);
  return res.json(surveyTemplate);
};

const deleteASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await surveyTemplatesModel.deleteASurveyTemplate(Number(req.params.id));
  return res.status(204).send(surveyTemplate);
};

const getAllTemplateQuestions = async (req: Request, res: Response) => {
  const surveyTemplateQuestions = await surveyTemplatesModel.getAllTemplateQuestions(Number(req.params.id));
  return res.json(surveyTemplateQuestions);
};

const getATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await surveyTemplatesModel.getATemplateQuestion(Number(req.params.id));
  return res.json(surveyTemplateQuestion);
};

const createATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await surveyTemplatesModel.createATemplateQuestion(Number(req.params.id), req.body);
  return res.json(surveyTemplateQuestion);
};

const updateATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await surveyTemplatesModel.updateATemplateQuestion(Number(req.params.id), Number(req.params.question_id), req.body);
  return res.json(surveyTemplateQuestion);
};

const deleteATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await surveyTemplatesModel.deleteATemplateQuestion(Number(req.params.id));
  return res.status(204).send(surveyTemplateQuestion);
};

export {
  getAllSurveyTemplates,
  createASurveyTemplate,
  updateAllSurveyTemplates,
  deleteAllSurveyTemplates,
  getASurveyTemplateById,
  getASurveyTemplateByType,
  getSurveyTemplateMetadata,
  updateASurveyTemplate,
  deleteASurveyTemplate,
  getAllTemplateQuestions,
  getATemplateQuestion,
  createATemplateQuestion,
  updateATemplateQuestion,
  deleteATemplateQuestion
};