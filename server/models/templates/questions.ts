import { SurveyTemplateQuestion } from '../models';
import { prisma } from '../../utils/prisma';

export const getTemplateQuestions = async (survey_template_id: number) => {
  return await prisma.surveytemplatequestions.findMany({
    where: {
      survey_template_id,
    },
    orderBy: {
      sequence: 'asc',
    },
  });
};

export const createTemplateQuestions = async (
  survey_template_id: number,
  surveyQuestions: SurveyTemplateQuestion[]
) => {
  return await prisma.surveytemplatequestions.createMany({
    data: surveyQuestions.map((surveyQuestion) => ({
      title: surveyQuestion.title,
      description: surveyQuestion.description,
      tooltip: surveyQuestion.tooltip,
      sequence: surveyQuestion.sequence,
      survey_question_type_id: surveyQuestion.survey_question_type_id,
      survey_template_id,
    })),
  });
};

export const updateATemplateQuestion = async (
  survey_template_id: number,
  surveyQuestion: SurveyTemplateQuestion,
  question_id: number
) => {
  return await prisma.surveytemplatequestions.update({
    where: {
      id: question_id,
      survey_template_id,
    },
    data: {
      ...surveyQuestion,
      survey_template_id,
    },
  });
};

export const deleteATemplateQuestion = async (
  survey_template_id: number,
  question_id: number
) => {
  return await prisma.surveytemplatequestions.delete({
    where: {
      id: question_id,
      survey_template_id,
    },
  });
};
