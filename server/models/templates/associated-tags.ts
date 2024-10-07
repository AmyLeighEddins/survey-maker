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

export const updateTemplateAssociatedTags = async (
  survey_template_id: number,
  updatedSurveyTags: SurveyAssociatedTag[]
) => {
  const currentTags = await prisma.surveytemplateassociatedtags.findMany({
    where: {
      survey_template_id,
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
    const deleteTag = prisma.surveytemplateassociatedtags.delete({
      where: {
        id: tag.id,
        survey_template_id,
      },
    });
    deleteArray.push(deleteTag);
  });

  tagsToAdd.map(async (tag) => {
    const addTag = prisma.surveytemplateassociatedtags.create({
      data: {
        survey_tag_id: tag.survey_tag_id,
        survey_template_id,
      },
    });
    addArray.push(addTag);
  });

  return await prisma.$transaction([...deleteArray, ...addArray]);
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
