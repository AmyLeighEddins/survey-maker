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

export const updateTemplateQuestions = async (
  survey_template_id: number,
  updatedSurveyQuestions: SurveyTemplateQuestion[]
) => {
  const currentQuestions = await prisma.surveytemplatequestions.findMany({
    where: {
      survey_template_id,
    },
  });
  const currentQuestionIds = currentQuestions.map((question) => question.id);
  const newSurveyQuestionIds = updatedSurveyQuestions.map(
    (question) => question.id
  );

  const questionsToDelete = currentQuestions.filter(
    (question) => !newSurveyQuestionIds.includes(question.id)
  );
  const questionsToAdd = updatedSurveyQuestions.filter(
    (question) => !currentQuestionIds.includes(question.id)
  );
  const questionsToUpdate = updatedSurveyQuestions.filter((question) =>
    currentQuestionIds.includes(question.id)
  );

  const deleteArray: any[] = [];
  const addArray: any[] = [];
  const updateArray: any[] = [];

  questionsToDelete.map(async (question) => {
    const deleteQuestion = prisma.surveytemplatequestions.delete({
      where: {
        id: question.id,
        survey_template_id,
      },
    });
    deleteArray.push(deleteQuestion);
  });

  questionsToAdd.map(async (question) => {
    const addQuestion = prisma.surveytemplatequestions.create({
      data: {
        title: question.title,
        description: question.description,
        tooltip: question.tooltip,
        sequence: question.sequence,
        survey_question_type_id: question.survey_question_type_id,
        survey_template_id,
      },
    });
    addArray.push(addQuestion);
  });

  questionsToUpdate.map(async (question) => {
    const updateQuestion = prisma.surveytemplatequestions.update({
      where: {
        id: question.id,
        survey_template_id,
      },
      data: {
        title: question.title,
        description: question.description,
        tooltip: question.tooltip,
        sequence: question.sequence,
        survey_question_type_id: question.survey_question_type_id,
      },
    });
    updateArray.push(updateQuestion);
  });

  return await prisma.$transaction([
    ...deleteArray,
    ...addArray,
    ...updateArray,
  ]);
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
