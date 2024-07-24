import { SurveyEmployeeResponse } from './types';
import { getAllSurveyEmployeeResponses } from './mock';

export const createASurveyEmployeeResponse = async (newSurveyEmployeeRespons: SurveyEmployeeResponse) => {
  return {
    id: 6,
    survey_employee_recipient_id: 1,
    survey_response_item_id: 1,
  };
};

export const getSurveyEmployeeResponseById = async (id: number) => {
  const surveyEmployeeResponses = await getAllSurveyEmployeeResponses();
  return surveyEmployeeResponses.find(surveyEmployeeRespons => surveyEmployeeRespons.survey_employee_recipient_id === id);
};

export const updateASurveyEmployeeResponse = async (surveyEmployeeRespons: SurveyEmployeeResponse) => {
  return {
    id: 1,
    survey_employee_recipient_id: 1,
    survey_response_item_id: 1,
  };
};

export const deleteASurveyEmployeeResponse = async (id: number) => {
  return [];
};