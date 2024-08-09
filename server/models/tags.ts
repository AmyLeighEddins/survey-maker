import { prisma } from '../utils/prisma';
import { SurveyTag } from './models';

export const getAllSurveyTags = async () => {
  return await prisma.surveytags.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyTag = async (newSurveyTag: SurveyTag) => {
  return await prisma.surveytags.create({
    data: newSurveyTag,
  });
};

export const getSurveyTagById = async (tag_id: number) => {
  return await prisma.surveytags.findUnique({
    where: {
      id: tag_id,
    },
  });
};

export const updateASurveyTag = async (tag_id: number, surveyTag: SurveyTag) => {
  return await prisma.surveytags.update({
    where: {
      id: tag_id,
    },
    data: surveyTag,
  });
};

export const deleteASurveyTag = async (tag_id: number) => {
  return await prisma.surveytags.delete({
    where: {
      id: tag_id,
    },
  });
};

export const getAllSurveyTagsBySurvey = async (surveyId: number) => {
  // TODO: fix when we have survey associated tags
  return getAllSurveyTags();
};