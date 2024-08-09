import { SurveyQuestion } from '../models';
import { prisma } from '../../utils/prisma';

export const getSurveyQuestions = async (survey_id: number) => {
  return await prisma.surveyquestions.findMany({
    where: {
      survey_id,
    },
    orderBy: {
      sequence: 'asc',
    },
  });
};

export const createASurveyQuestion = async (survey_id: number, surveyQuestion: SurveyQuestion) => {
  return await prisma.surveyquestions.create({
    data: {
      ...surveyQuestion,
      survey_id,
    },
  });
};

export const updateASurveyQuestion = async (survey_id: number, surveyQuestion: SurveyQuestion, question_id: number) => {
  return await prisma.surveyquestions.update({
    where: {
      id: question_id,
      survey_id,
    },
    data: {
      ...surveyQuestion,
      survey_id,
    },
  });
};

export const deleteASurveyQuestion = async (survey_id: number, question_id: number) => {
  return await prisma.surveyquestions.delete({
    where: {
      id: question_id,
      survey_id,
    },
  });
};
