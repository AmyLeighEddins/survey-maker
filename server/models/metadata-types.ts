import { prisma } from '../utils/prisma';
import { SurveyMetadataType } from './models';

export const getAllSurveyMetadataTypes = async () => {
  return await prisma.surveymetadatatypes.findMany({
    orderBy: {
      id: "asc",
    },
  })
};

export const createASurveyMetadataType = async (newSurveyMetadataType: SurveyMetadataType) => {
  return await prisma.surveymetadatatypes.create({
    data: newSurveyMetadataType,
  });
};

export const getSurveyMetadataTypeById = async (type_id: number) => {
  return await prisma.surveymetadatatypes.findUnique({
    where: {
      id: type_id,
    },
  });
};

export const updateASurveyMetadataType = async (type_id: number, surveyMetadataType: SurveyMetadataType) => {
  return await prisma.surveymetadatatypes.update({
    where: {
      id: type_id,
    },
    data: surveyMetadataType,
  });
};

export const deleteASurveyMetadataType = async (type_id: number) => {
  return await prisma.surveymetadatatypes.delete({
    where: {
      id: type_id,
    },
  });
};