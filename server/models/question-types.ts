import { prisma } from '../utils/prisma';
import { SurveyQuestionType } from './models';

export const getAllSurveyQuestionTypes = async () => {
  return await prisma.surveyquestiontypes.findMany({
    orderBy: {
      id: 'asc',
    },
  });
};

export const createASurveyQuestionType = async (newSurveyQuestionType: SurveyQuestionType) => {
  return await prisma.surveyquestiontypes.create({
    data: newSurveyQuestionType,
  });
};

export const getSurveyQuestionTypeById = async (id: number) => {
  return await prisma.surveyquestiontypes.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurveyQuestionType = async (id: number, surveyQuestionType: SurveyQuestionType) => {
  return await prisma.surveyquestiontypes.update({
    where: {
      id,
    },
    data: surveyQuestionType,
  });
};

export const deleteASurveyQuestionType = async (id: number) => {
  return await prisma.surveyquestiontypes.delete({
    where: {
      id,
    },
  });
};