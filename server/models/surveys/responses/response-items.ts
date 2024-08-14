import { SurveyResponseItem } from '../../models';
import { prisma } from '../../../utils/prisma';

export const getSurveyResponseItemsByQuestion = async (questionId: number) => {
  return await prisma.surveyresponseitems.findMany({
    where: {
      survey_question_id: questionId,
    },
  });
}

// TODO: add filter for get all responses to filter by survey id

export const createASurveyResponseItem = async (newSurveyResponseItem: SurveyResponseItem) => {
  return await prisma.surveyresponseitems.create({
    data: newSurveyResponseItem,
  });
};

export const updateASurveyResponseItem = async (id: number, newSurveyResponseItem: SurveyResponseItem) => {
  return await prisma.surveyresponseitems.update({
    where: {
      id: id,
    },
    data: newSurveyResponseItem,
  });
};

export const deleteASurveyResponseItem = async (id: number) => {
  return await prisma.surveyresponseitems.delete({
    where: {
      id: id,
    },
  });
};