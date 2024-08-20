import { prisma } from '../../utils/prisma';
import { SurveyStatus } from '../models';

export const getAllSurveyStatuses = async () => {
  return await prisma.surveystatuses.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyStatus = async (newSurveyStatus: SurveyStatus) => {
  return await prisma.surveystatuses.create({
    data: newSurveyStatus,
  });
};

export const getSurveyStatusById = async (status_id: number) => {
  return await prisma.surveystatuses.findUnique({
    where: {
      id: status_id,
    },
  });
};

export const updateASurveyStatus = async (status_id: number, surveyStatus: SurveyStatus) => {
  return await prisma.surveystatuses.update({
    where: {
      id: status_id,
    },
    data: surveyStatus,
  });
};

export const deleteASurveyStatus = async (status_id: number) => {
  return await prisma.surveystatuses.delete({
    where: {
      id: status_id,
    },
  });
};