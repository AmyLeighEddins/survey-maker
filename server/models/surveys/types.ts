import { prisma } from '../../utils/prisma';
import { SurveyType } from '../types';

export const getAllSurveyTypes = async () => {
  return prisma.surveytypes.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyType = async (newSurveyType: SurveyType) => {
  return prisma.surveytypes.create({
    data: newSurveyType,
  });
};

export const getSurveyTypeById = async (id: number) => {
  return prisma.surveytypes.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurveyType = async (id: number, surveyType: SurveyType) => {
  return prisma.surveytypes.update({
    where: {
      id,
    },
    data: surveyType,
  });
};

export const deleteASurveyType = async (id: number) => {
  return prisma.surveytypes.delete({
    where: {
      id,
    },
  });
};