import { prisma } from '../../utils/prisma';
import { SurveyTemplate } from '../models';

export const getAllSurveyTemplates = async () => {
  return await prisma.surveytemplates.findMany({
    orderBy: {
      id: 'asc',
    },
  });
};

export const createASurveyTemplate = async (surveyTemplate: SurveyTemplate) => {
  return await prisma.surveytemplates.create({
    data: surveyTemplate,
  });
};

export const getASurveyTemplateById = async (id: number) => {
  return await prisma.surveytemplates.findUnique({
    where: {
      id,
    },
  });
};

export const updateASurveyTemplate = async (id: number, surveyTemplate: SurveyTemplate) => {
  return await prisma.surveytemplates.update({
    where: {
      id,
    },
    data: surveyTemplate,
  });
};

export const deleteASurveyTemplate = async (id: number) => {
  return await prisma.surveytemplates.delete({
    where: {
      id,
    },
  });
};

export const getASurveyTemplateByType = async (type_id: number) => {
  return await prisma.surveytemplates.findMany({
    where: {
      survey_type_id: type_id,
    },
  });
};