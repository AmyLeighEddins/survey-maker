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

export const createEmployeeRecipients = async (
  survey_id: number,
  surveyEmployeeRecipients: SurveyEmployeeRecipient[]
) => {
  return await prisma.surveyemployeerecipients.createMany({
    data: surveyEmployeeRecipients.map((surveyEmployeeRecipient) => ({
      ...surveyEmployeeRecipient,
      survey_status_id: surveyEmployeeRecipient.survey_status_id || 1,
      survey_id,
    })),
  });
};

export const updateEmployeeRecipients = async (
  survey_id: number,
  updatedSurveyEmployeeRecipients: SurveyEmployeeRecipient[]
) => {
  const currentRecipients = await prisma.surveyemployeerecipients.findMany({ where: { survey_id } });
  const currentRecipeintIds = currentRecipients.map((recipient) => recipient.employee_id);
  const newRecipientIds = updatedSurveyEmployeeRecipients.map((recipient) => recipient.employee_id);

  const recipientsToDelete = currentRecipients.filter(({ employee_id }) => !newRecipientIds.includes(employee_id));
  const recipientsToAdd = updatedSurveyEmployeeRecipients.filter(({ employee_id }) => !currentRecipeintIds.includes(employee_id));

  const deleteArray: any[] = [];
  const addArray: any[] = [];

  recipientsToDelete.map(async (recipient) => {
    const surveyRecipient = prisma.surveyemployeerecipients.deleteMany({
      where: {
        employee_id: recipient.employee_id,
        survey_id,
      },
    });
    deleteArray.push(surveyRecipient);
  });

  recipientsToAdd.map(async (recipient) => {
    const surveyRecipient = await prisma.surveyemployeerecipients.create({
      data: {
        ...recipient,
        survey_status_id: recipient.survey_status_id || 1,
        survey_id,
      },
    });
    addArray.push(surveyRecipient);
  }); 

  return await prisma.$transaction([...deleteArray, ...addArray]);
};

export const deleteAnEmployeeRecipient = async (
  id: number,
  recipient_id: number
) => {
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
      ...(status !== undefined && { survey_status_id: status }),
      survey_id: id,
    },
  });
};

export const createExternalRecipients = async (
  survey_id: number,
  surveyExternalRecipients: SurveyExternalRecipient[]
) => {
  return await prisma.surveyexternalrecipients.createMany({
    data: surveyExternalRecipients.map((surveyExternalRecipient) => ({
      ...surveyExternalRecipient,
      survey_status_id: surveyExternalRecipient.survey_status_id || 1,
      survey_id,
    })),
  });
};

export const updateExternalRecipients = async (
  survey_id: number,
  updatedSurveyExternalRecipients: SurveyExternalRecipient[]
) => {
  const currentRecipients = await prisma.surveyexternalrecipients.findMany({ where: { survey_id } });
  const currentRecipeintIds = currentRecipients.map((recipient) => recipient.email_address);
  const newRecipientIds = updatedSurveyExternalRecipients.map((recipient) => recipient.email_address);

  const recipientsToDelete = currentRecipients.filter(({ email_address }) => !newRecipientIds.includes(email_address));
  const recipientsToAdd = updatedSurveyExternalRecipients.filter(({ email_address }) => !currentRecipeintIds.includes(email_address));

  const deleteArray: any[] = [];
  const addArray: any[] = [];

  recipientsToDelete.map(async (recipient) => {
    const surveyRecipient = prisma.surveyexternalrecipients.deleteMany({
      where: {
        email_address: recipient.email_address,
        survey_id,
      },
    });
    deleteArray.push(surveyRecipient);
  });

  recipientsToAdd.map(async (recipient) => {
    const surveyRecipient = await prisma.surveyexternalrecipients.create({
      data: {
        ...recipient,
        survey_status_id: recipient.survey_status_id || 1,
        survey_id,
      },
    });
    addArray.push(surveyRecipient);
  }); 

  return await prisma.$transaction([...deleteArray, ...addArray]);
};

export const deleteAnExternalRecipient = async (
  id: number,
  recipient_id: number
) => {
  return await prisma.surveyexternalrecipients.delete({
    where: {
      id: recipient_id,
    },
  });
};
