import { Survey } from '../models';
import { prisma } from '../../utils/prisma';

export const getAllSurveys = async () => {
  return await prisma.surveys.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurvey = async (newSurvey: Survey) => {
  return await prisma.surveys.create({
    data: newSurvey,
  });
};

export const getSurveyById = async (id: number) => {
  return await prisma.surveys.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurvey = async (id: number, survey: Survey) => {
  return await prisma.surveys.update({
    where: {
      id,
    },
    data: survey,
  });
};

export const deleteASurvey = async (id: number) => {
  return await prisma.surveys.update({
    where: {
      id,
    },
    data: {
      expiry_date: new Date(),
    }
  });
};

export const getSurveysByType = async (type_id: number) => {
  return await prisma.surveys.findMany({
    where: {
      survey_type_id: type_id,
    },
    orderBy: {
      id: "asc",
    },
  });
};
