import { SurveyExternalRecipient, SurveyEmployeeRecipient } from '../models';
import { prisma } from '../../utils/prisma';

// Employee Recipients

export const getAllEmployeeRecipients = async (id: number, status?: number) => {
  return await prisma.surveyemployeerecipients.findMany({
    where: {
      ...(status !== undefined && { survey_status_id: status }),
      survey_id: id,
    },
  });
};

export const createAnEmployeeRecipient = async (survey_id: number, surveyEmployeeRecipient: SurveyEmployeeRecipient) => {
  return await prisma.surveyemployeerecipients.create({
    data: {
      ...surveyEmployeeRecipient,
      survey_id,
    }
  });
};

export const updateAnEmployeeRecipient = async (id: number, recipient_id: number, surveyEmployeeRecipient: SurveyEmployeeRecipient) => {
  return await prisma.surveyemployeerecipients.update({
    where: {
      id: recipient_id,
    },
    data: {
      ...surveyEmployeeRecipient,
      survey_id: id,
    }
  });
};

export const deleteAnEmployeeRecipient = async (id: number, recipient_id: number) => {
  return await prisma.surveyemployeerecipients.delete({
    where: {
      id: recipient_id,
    },
  });
};

// External Recipients

export const getAllExternalRecipients = async (id: number, status?: number) => {
  return await prisma.surveyexternalrecipients.findMany({
    where: {
      survey_id: id,
      survey_status_id: status,
    },
  });
};

export const createAnExternalRecipient = async (survey_id: number, surveyExternalRecipient: SurveyExternalRecipient) => {
  return await prisma.surveyexternalrecipients.create({
    data: {
      ...surveyExternalRecipient,
      survey_id,
    }
  });
};

export const updateAnExternalRecipient = async (id: number, recipient_id: number, surveyExternalRecipient: SurveyExternalRecipient) => {
  return await prisma.surveyexternalrecipients.update({
    where: {
      id: recipient_id,
    },
    data: {
      ...surveyExternalRecipient,
      survey_id: id,
    }
  });
};

export const deleteAnExternalRecipient = async (id: number, recipient_id: number) => {
  return await prisma.surveyexternalrecipients.delete({
    where: {
      id: recipient_id,
    },
  });
};

// All Recipients

export const getAllRecipients = async (id: number, status?: number) => {
  const surveyEmployeeRecipients = await getAllEmployeeRecipients(id, status);
  const surveyExternalRecipients = await getAllExternalRecipients(id, status);
  return [...surveyEmployeeRecipients, ...surveyExternalRecipients];
};
