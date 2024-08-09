import { SurveyExternalResponse } from '../../models';
import { getAllSurveyExternalResponses } from '../../mock';

export const createASurveyExternalResponse = async (newSurveyExternalRespons: SurveyExternalResponse) => {
  return {
    id: 6,
    survey_external_recipient_id: 1,
    survey_response_item_id: 1,
  };
};

export const getSurveyExternalResponseById = async (id: number) => {
  const surveyExternalResponses = await getAllSurveyExternalResponses();
  return surveyExternalResponses.find(surveyExternalRespons => surveyExternalRespons.survey_external_recipient_id === id);
};

export const updateASurveyExternalResponse = async (surveyExternalRespons: SurveyExternalResponse) => {
  return {
    id: 1,
    survey_external_recipient_id: 1,
    survey_response_item_id: 1,
  };
};

export const deleteASurveyExternalResponse = async (id: number) => {
  return [];
};