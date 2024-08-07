import { Request, Response } from 'express';
import { SurveyMetadataModel, SurveyTemplatesModel } from '../../models';

const getAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await SurveyTemplatesModel.getAllSurveyTemplates();
  return res.json(surveyTemplates);
};

const createASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await SurveyTemplatesModel.createASurveyTemplate(req.body);
  return res.json(surveyTemplate);
};

const updateAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await SurveyTemplatesModel.updateAllSurveyTemplates(req.body);
  return res.json(surveyTemplates);
};

const deleteAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await SurveyTemplatesModel.deleteAllSurveyTemplates();
  return res.status(204).send(surveyTemplates);
};

const getASurveyTemplateById = async (req: Request, res: Response) => {
  const surveyTemplate = await SurveyTemplatesModel.getASurveyTemplateById(Number(req.params.id));
  return res.json(surveyTemplate);
};

const getASurveyTemplateByType = async (req: Request, res: Response) => {
  const surveyTemplate = await SurveyTemplatesModel.getASurveyTemplateByType(Number(req.params.type_id));
  return res.json(surveyTemplate);
};

const getSurveyTemplateMetadata = async (req: Request, res: Response) => {
  const surveyMetadata = await SurveyMetadataModel.getSurveyMetadata(Number(req.params.id));
  return res.json(surveyMetadata);
};

const updateASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await SurveyTemplatesModel.updateASurveyTemplate(req.body);
  return res.json(surveyTemplate);
};

const deleteASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await SurveyTemplatesModel.deleteASurveyTemplate(Number(req.params.id));
  return res.status(204).send(surveyTemplate);
};

const getAllTemplateQuestions = async (req: Request, res: Response) => {
  const surveyTemplateQuestions = await SurveyTemplatesModel.getAllTemplateQuestions(Number(req.params.id));
  return res.json(surveyTemplateQuestions);
};

const getATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await SurveyTemplatesModel.getATemplateQuestion(Number(req.params.id));
  return res.json(surveyTemplateQuestion);
};

const createATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await SurveyTemplatesModel.createATemplateQuestion(Number(req.params.id), req.body);
  return res.json(surveyTemplateQuestion);
};

const updateATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await SurveyTemplatesModel.updateATemplateQuestion(Number(req.params.id), Number(req.params.question_id), req.body);
  return res.json(surveyTemplateQuestion);
};

const deleteATemplateQuestion = async (req: Request, res: Response) => {
  const surveyTemplateQuestion = await SurveyTemplatesModel.deleteATemplateQuestion(Number(req.params.id));
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