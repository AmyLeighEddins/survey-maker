import { SurveyStatus } from './types';

export const getAllSurveyStatuses = async () => {
  return [{
    id: 1,
    name: 'not started',
  }, {
    id: 2,
    name: 'in progress',
  }, {
    id: 3,
    name: 'completed',
  }]
};

export const createASurveyStatus = async (newSurveyStatus: SurveyStatus) => {
  return {
    id: 6,
    name: 'new status 6',
  };
};

export const deleteAllSurveyStatuses = async () => {
  return [];
};

export const getSurveyStatusById = async (id: number) => {
  const surveyStatuses = await getAllSurveyStatuses();
  return surveyStatuses.find(surveyStatus => surveyStatus.id === id);
};

export const updateASurveyStatus = async (surveyStatus: SurveyStatus) => {
  return {
    id: 1,
    name: 'update 1',
  };
};

export const deleteASurveyStatus = async (id: number) => {
  return [];
};