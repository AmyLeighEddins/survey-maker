import { Request, Response } from 'express';
import { SurveyTagsModel } from '../../models';

const getAllSurveyTags = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.getAllSurveyTags();
  return res.json(surveyTags);
};

const createASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.createASurveyTag(req.body);
  return res.json(surveyTags);
};

const deleteAllSurveyTags = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.deleteAllSurveyTags();
  return res.status(204).send(surveyTags);
};

const getSurveyTagById = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.getSurveyTagById(Number(req.params.id));
  return res.json(surveyTags);
};

const updateASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.updateASurveyTag(req.body);
  return res.json(surveyTags);
};

const deleteASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await SurveyTagsModel.deleteASurveyTag(Number(req.params.id));
  return res.status(204).send(surveyTags);
};

export { getAllSurveyTags, createASurveyTag, deleteAllSurveyTags, getSurveyTagById, updateASurveyTag, deleteASurveyTag };