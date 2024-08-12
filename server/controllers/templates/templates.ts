import { Request, Response } from 'express';
import { TemplatesModel } from '../../models';

const getAllSurveyTemplates = async (req: Request, res: Response) => {
  const surveyTemplates = await TemplatesModel.getAllSurveyTemplates();
  return res.json(surveyTemplates);
};

const createASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await TemplatesModel.createASurveyTemplate(req.body);
  return res.json(surveyTemplate);
};

const getASurveyTemplateById = async (req: Request, res: Response) => {
  const surveyTemplate = await TemplatesModel.getASurveyTemplateById(Number(req.params.id));
  return res.json(surveyTemplate);
};

const updateASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await TemplatesModel.updateASurveyTemplate(Number(req.params.id), req.body);
  return res.json(surveyTemplate);
};

const deleteASurveyTemplate = async (req: Request, res: Response) => {
  const surveyTemplate = await TemplatesModel.deleteASurveyTemplate(Number(req.params.id));
  return res.status(204).send(surveyTemplate);
};

const getASurveyTemplateByType = async (req: Request, res: Response) => {
  const surveyTemplate = await TemplatesModel.getASurveyTemplateByType(Number(req.params.type_id));
  return res.json(surveyTemplate);
};

export {
  getAllSurveyTemplates,
  createASurveyTemplate,
  getASurveyTemplateById,
  updateASurveyTemplate,
  deleteASurveyTemplate,
  getASurveyTemplateByType,
};