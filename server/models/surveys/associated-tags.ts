import { prisma } from '../../utils/prisma';
import { SurveyAssociatedTag } from '../models';

export const getSurveyAssociatedTags = async (id: number) => {
  return await prisma.surveyassociatedtags.findMany({
    where: {
      survey_id: id,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export const createSurveyAssociatedTags = async (
  survey_id: number,
  surveyTags: SurveyAssociatedTag[]
) => {
  return await prisma.surveyassociatedtags.createMany({
    data: surveyTags.map((surveyTag) => ({
      survey_tag_id: surveyTag.survey_tag_id,
      survey_id,
    })),
  });
};

export const updateSurveyAssociatedTags = async (
  survey_id: number,
  updatedSurveyTags: SurveyAssociatedTag[]
) => {
  const currentTags = await prisma.surveyassociatedtags.findMany({
    where: {
      survey_id,
    },
  });
  const currentTagIds = currentTags.map((tag) => tag.survey_tag_id);
  const newSurveyTagIds = updatedSurveyTags.map((tag) => tag.survey_tag_id);

  const tagsToDelete = currentTags.filter(
    (tag) => !newSurveyTagIds.includes(tag.survey_tag_id)
  );
  const tagsToAdd = updatedSurveyTags.filter(
    (tag) => !currentTagIds.includes(tag.survey_tag_id)
  );

  const deleteArray: any[] = [];
  const addArray: any[] = [];

  tagsToDelete.map(async (tag) => {
    const deleteTag = prisma.surveyassociatedtags.delete({
      where: {
        id: tag.id,
        survey_id,
      },
    });
    deleteArray.push(deleteTag);
  });

  tagsToAdd.map(async (tag) => {
    const addTag = prisma.surveyassociatedtags.create({
      data: {
        survey_tag_id: tag.survey_tag_id,
        survey_id,
      },
    });
    addArray.push(addTag);
  });

  return await prisma.$transaction([...deleteArray, ...addArray]);
};

export const deleteASurveyAssociatedTag = async (
  survey_id: number,
  associated_tag_id: number
) => {
  return await prisma.surveyassociatedtags.delete({
    where: {
      id: associated_tag_id,
      survey_id,
    },
  });
};
