import { prisma } from '../../utils/prisma';
import { SurveyAssociatedTag } from '../models';

export const getTemplateAssociatedTags = async (id: number) => {
  return await prisma.surveytemplateassociatedtags.findMany({
    where: {
      survey_template_id: id,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export const createTemplateAssociatedTags = async (
  survey_template_id: number,
  surveyTags: SurveyAssociatedTag[]
) => {
  return await prisma.surveytemplateassociatedtags.createMany({
    data: surveyTags.map((surveyTag) => ({
      survey_tag_id: surveyTag.survey_tag_id,
      survey_template_id,
    })),
  });
};

export const updateATemplateAssociatedTag = async (
  survey_template_id: number,
  surveyTag: SurveyAssociatedTag,
  associated_tag_id: number
) => {
  return await prisma.surveytemplateassociatedtags.update({
    where: {
      id: associated_tag_id,
      survey_template_id,
    },
    data: {
      ...surveyTag,
      survey_template_id,
    },
  });
};

export const deleteATemplateAssociatedTag = async (
  survey_template_id: number,
  associated_tag_id: number
) => {
  return await prisma.surveytemplateassociatedtags.delete({
    where: {
      id: associated_tag_id,
      survey_template_id,
    },
  });
};
