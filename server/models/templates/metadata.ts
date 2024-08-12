import { prisma } from '../../utils/prisma';
import { SurveyTemplatesMetadata } from '../models';

export const getTemplateMetadata = async (id: number) => {
  return await prisma.surveytemplatemetadata.findMany({
    where: {
      survey_template_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const createATemplateMetadata = async (survey_template_id: number, surveyMetadata: SurveyTemplatesMetadata) => {
  return await prisma.surveytemplatemetadata.create({
    data: {
      ...surveyMetadata,
      survey_template_id,
    },
  });
};

export const updateATemplateMetadata = async (survey_template_id: number, surveyMetadata: SurveyTemplatesMetadata, metadata_id: number) => {
  return await prisma.surveytemplatemetadata.update({
    where: {
      id: metadata_id,
      survey_template_id,
    },
    data: {
      ...surveyMetadata,
      survey_template_id,
    }
  });
};

export const deleteATemplateMetadata = async (survey_template_id: number, metadata_id: number) => {
  return await prisma.surveytemplatemetadata.delete({
    where: {
      id: metadata_id,
      survey_template_id,
    },
  });
};
