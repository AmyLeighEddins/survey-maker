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

export const createSurveyQuestions = async (
  survey_id: number,
  surveyQuestions: SurveyQuestion[]
) => {
  return await prisma.surveyquestions.createMany({
    data: surveyQuestions.map((surveyQuestion) => ({
      title: surveyQuestion.title,
      description: surveyQuestion.description,
      tooltip: surveyQuestion.tooltip,
      sequence: surveyQuestion.sequence,
      survey_question_type_id: surveyQuestion.survey_question_type_id,
      survey_id,
    })),
  });
};

export const updateSurveyQuestions = async (
  survey_id: number,
  updatedSurveyQuestions: SurveyQuestion[]
) => {
  const currentQuestions = await prisma.surveyquestions.findMany({
    where: {
      survey_id,
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
    const deleteQuestion = prisma.surveyquestions.delete({
      where: {
        id: question.id,
        survey_id,
      },
    });
    deleteArray.push(deleteQuestion);
  });

  questionsToAdd.map(async (question) => {
    const addQuestion = prisma.surveyquestions.create({
      data: {
        title: question.title,
        description: question.description,
        tooltip: question.tooltip,
        sequence: question.sequence,
        survey_question_type_id: question.survey_question_type_id,
        survey_id,
      },
    });
    addArray.push(addQuestion);
  });

  questionsToUpdate.map(async (question) => {
    const updateQuestion = prisma.surveyquestions.update({
      where: {
        id: question.id,
        survey_id,
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

export const deleteASurveyQuestion = async (
  survey_id: number,
  question_id: number
) => {
  return await prisma.surveyquestions.delete({
    where: {
      id: question_id,
      survey_id,
    },
  });
};
