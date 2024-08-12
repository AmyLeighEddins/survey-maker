import { prisma } from '../../utils/prisma';
import { SurveyAssociatedTag } from '../models';

export const getSurveyAssociatedTags = async (id: number) => {
  return await prisma.surveyassociatedtags.findMany({
    where: {
      survey_id: id,
    },
    orderBy: {
      id: "asc",
    },
  });
};

export const createASurveyAssociatedTag = async (survey_id: number, surveyTag: SurveyAssociatedTag) => {
  return await prisma.surveyassociatedtags.create({
    data: {
      ...surveyTag,
      survey_id,
    },
  });
};

export const updateASurveyAssociatedTag = async (survey_id: number, surveyTag: SurveyAssociatedTag, associated_tag_id: number) => {
  console.log('test', associated_tag_id, survey_id);
  return await prisma.surveyassociatedtags.update({
    where: {
      id: associated_tag_id,
      survey_id,
    },
    data: {
      ...surveyTag,
      survey_id,
    }
  });
};

export const deleteASurveyAssociatedTag = async (survey_id: number, associated_tag_id: number) => {
  return await prisma.surveyassociatedtags.delete({
    where: {
      id: associated_tag_id,
      survey_id,
    },
  });
};
