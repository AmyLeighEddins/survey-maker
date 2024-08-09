import { prisma } from '../utils/prisma';
import { SurveyType } from './models';

export const getAllSurveyTypes = async () => {
  return await prisma.surveytypes.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyType = async (newSurveyType: SurveyType) => {
  return await prisma.surveytypes.create({
    data: newSurveyType,
  });
};

export const getSurveyTypeById = async (id: number) => {
  return await prisma.surveytypes.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurveyType = async (id: number, surveyType: SurveyType) => {
  return await prisma.surveytypes.update({
    where: {
      id,
    },
    data: surveyType,
  });
};

export const deleteASurveyType = async (id: number) => {
  return await prisma.surveytypes.delete({
    where: {
      id,
    },
  });
};