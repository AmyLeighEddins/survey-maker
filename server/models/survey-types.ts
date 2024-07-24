import { SurveyType } from './types';

export const getAllSurveyTypes = async () => {
  return [{
    id: 1,
    description: 'engagement',
  }, {
    id: 2,
    description: 'vacation',
  }, {
    id: 3,
    description: 'external',
  }]
};

export const createASurveyType = async (newSurveyType: SurveyType) => {
  return {
    id: 6,
    description: 'new type 6',
  };
};

export const deleteAllSurveyTypes = async () => {
  return [];
};

export const getSurveyTypeById = async (id: number) => {
  const surveyTypes = await getAllSurveyTypes();
  return surveyTypes.find(surveyType => surveyType.id === id);
};

export const updateASurveyType = async (surveyType: SurveyType) => {
  return {
    id: 1,
    description: 'update 1',
  };
};

export const deleteASurveyType = async (id: number) => {
  return [];
};