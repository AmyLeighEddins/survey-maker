import { SurveyQuestionType } from './types';

export const getAllSurveyQuestionTypes = async () => {
  return [{
    id: 1,
    description: 'text',
  }, {
    id: 2,
    description: 'dropdown',
  }, {
    id: 3,
    description: 'checkbox',
  }, {
    id: 4,
    description: 'radio',
  }]
};

export const createASurveyQuestionType = async (newSurveyQuestionType: SurveyQuestionType) => {
  return {
    id: 6,
    description: 'new type 6',
  };
};

export const deleteAllSurveyQuestionTypes = async () => {
  return [];
};

export const getSurveyQuestionTypeById = async (id: number) => {
  const surveyQuestionTypes = await getAllSurveyQuestionTypes();
  return surveyQuestionTypes.find(surveyQuestionType => surveyQuestionType.id === id);
};

export const updateASurveyQuestionType = async (surveyQuestionType: SurveyQuestionType) => {
  return {
    id: 1,
    description: 'update 1',
  };
};

export const deleteASurveyQuestionType = async (id: number) => {
  return [];
};