import { Request, Response } from 'express';
import { surveyTagsModel } from '../models';

const getAllSurveyTags = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.getAllSurveyTags();
  return res.json(surveyTags);
};

const createASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.createASurveyTag(req.body);
  return res.json(surveyTags);
};

const deleteAllSurveyTags = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.deleteAllSurveyTags();
  return res.status(204).send(surveyTags);
};

const getSurveyTagById = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.getSurveyTagById(Number(req.params.id));
  return res.json(surveyTags);
};

const updateASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.updateASurveyTag(req.body);
  return res.json(surveyTags);
};

const deleteASurveyTag = async (req: Request, res: Response) => {
  const surveyTags = await surveyTagsModel.deleteASurveyTag(Number(req.params.id));
  return res.status(204).send(surveyTags);
};

export { getAllSurveyTags, createASurveyTag, deleteAllSurveyTags, getSurveyTagById, updateASurveyTag, deleteASurveyTag };