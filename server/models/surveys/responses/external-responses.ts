import { SurveyExternalResponse } from '../../models';
import { prisma } from '../../../utils/prisma';

export const createASurveyExternalResponse = async (newSurveyExternalRespons: SurveyExternalResponse) => {
  return await prisma.surveyexternalresponses.create({
    data: newSurveyExternalRespons,
  });
};

export const getSurveyExternalResponseByRecipientId = async (recipientId: number) => {
  return await prisma.surveyexternalresponses.findMany({
    where: {
      survey_external_recipient_id: recipientId,
    },
  });
};

export const updateASurveyExternalResponse = async (id: number, surveyExternalResponse: SurveyExternalResponse) => {
  return await prisma.surveyexternalresponses.update({
    where: {
      id,
    },
    data: surveyExternalResponse,
  });
};

export const deleteASurveyExternalResponse = async (id: number) => {
  return await prisma.surveyexternalresponses.delete({
    where: {
      id,
    },
  });
};