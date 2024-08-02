import { SurveyResponseItem } from '../../types';
import { getAllSurveysResponseItems } from '../../mock';

export const getSurveyResponseItemsByQuestion = async (questionId: number) => {
  const surveyResponseItems = await getAllSurveysResponseItems();
  return surveyResponseItems.find(surveyResponseItem => surveyResponseItem.survey_question_id === questionId);
}