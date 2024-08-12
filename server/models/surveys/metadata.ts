import { prisma } from '../../utils/prisma';
import { SurveyMetadata } from '../models';

export const getSurveyMetadata = async (id: number) => {
  return await prisma.surveymetadata.findMany({
    where: {
      survey_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyMetadata = async (survey_id: number, surveyMetadata: SurveyMetadata) => {
  return await prisma.surveymetadata.create({
    data: {
      ...surveyMetadata,
      survey_id,
    },
  });
};

export const updateASurveyMetadata = async (survey_id: number, surveyMetadata: SurveyMetadata, metadata_id: number) => {
  return await prisma.surveymetadata.update({
    where: {
      id: metadata_id,
      survey_id,
    },
    data: {
      ...surveyMetadata,
      survey_id,
    }
  });
};

export const deleteASurveyMetadata = async (survey_id: number, metadata_id: number) => {
  return await prisma.surveymetadata.delete({
    where: {
      id: metadata_id,
      survey_id,
    },
  });
};
