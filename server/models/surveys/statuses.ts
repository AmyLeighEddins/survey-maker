import { prisma } from '../../utils/prisma';
import { SurveyStatus } from '../types';

export const getAllSurveyStatuses = async () => {
  return prisma.surveystatuses.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyStatus = async (newSurveyStatus: SurveyStatus) => {
  return prisma.surveystatuses.create({
    data: newSurveyStatus,
  });
};

export const getSurveyStatusById = async (status_id: number) => {
  console.log('status_id', status_id);
  return prisma.surveystatuses.findUnique({
    where: {
      id: status_id,
    },
  });
};

export const updateASurveyStatus = async (status_id: number, surveyStatus: SurveyStatus) => {
  return prisma.surveystatuses.update({
    where: {
      id: status_id,
    },
    data: surveyStatus,
  });
};

export const deleteASurveyStatus = async (status_id: number) => {
  return prisma.surveystatuses.delete({
    where: {
      id: status_id,
    },
  });
};