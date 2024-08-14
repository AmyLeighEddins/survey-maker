import { SurveyEmployeeResponse } from '../../models';
import { prisma } from '../../../utils/prisma';

export const createASurveyEmployeeResponse = async (newSurveyEmployeeRespons: SurveyEmployeeResponse) => {
  return await prisma.surveyemployeeresponses.create({
    data: newSurveyEmployeeRespons,
  });
};

export const getSurveyEmployeeResponseByRecipientId = async (recipientId: number) => {
  return await prisma.surveyemployeeresponses.findMany({
    where: {
      survey_employee_recipient_id: recipientId,
    },
  });
};

export const updateASurveyEmployeeResponse = async (id: number, surveyEmployeeResponse: SurveyEmployeeResponse) => {
  return await prisma.surveyemployeeresponses.update({
    where: {
      id,
    },
    data: surveyEmployeeResponse,
  });
};

export const deleteASurveyEmployeeResponse = async (id: number) => {
  return await prisma.surveyemployeeresponses.delete({
    where: {
      id,
    },
  });
};