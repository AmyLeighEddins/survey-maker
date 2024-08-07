import { getAllSurveyMetadata } from '../../mock';
import { prisma } from '../../../utils/prisma';

export const getSurveyMetadata = async (id: number) => {
  // TODO: add prisma
  const surveyMetadata = await getAllSurveyMetadata();
  return surveyMetadata.filter(surveyMetadata => surveyMetadata.survey_id === id);
};
