import { prisma } from '../utils/prisma';
import { SurveyType } from './types';

export const getAllSurveyTypes = async () => {
  return prisma.surveytypes.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyType = async (newSurveyType: SurveyType) => {
  return {
    id: 6,
    description: 'new type 6',
  };
};

export const deleteAllSurveyTypes = async () => {
  return [];
};

export const getSurveyTypeById = async (id: number) => {
  return prisma.surveytypes.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurveyType = async (surveyType: SurveyType) => {
  return {
    id: 1,
    description: 'update 1',
  };
};

export const deleteASurveyType = async (id: number) => {
  return [];
};