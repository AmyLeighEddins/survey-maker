import { SurveyQuestion } from '../../types';
import { getAllSurveyQuestions } from '../../mock';
import { prisma } from '../../../utils/prisma';

// TODO: add prisma

export const getSurveyQuestions = async (id: number) => {
  const surveyQuestions = await getAllSurveyQuestions();
  return surveyQuestions.filter(surveyQuestion => surveyQuestion.survey_id === id);
};

export const createASurveyQuestion = async (survey_id: number, surveyQuestion: SurveyQuestion) => {
  return {
    id: 4,
    title: 'Question 4',
    description: 'Description 4',
    tooltop: 'Tooltip 4',
    sequence: 4,
    survey_question_type_id: 4,
    survey_id: survey_id
  }
};

export const updateASurveyQuestion = async (id: number, surveyQuestion: SurveyQuestion) => {
  return {
    id: 1,
    title: 'Question Update 1',
    description: 'Description 1',
    tooltop: 'Tooltip 1',
    sequence: 1,
    survey_question_type_id: 1,
    survey_id: 1
  };
};

export const deleteASurveyQuestion = async (id: number) => {
  return [];
};
