import { SurveyExternalRecipient, SurveyEmployeeRecipient } from '../types';
import { getAllSurveyExternalRecipients, getAllSurveyEmployeeRecipients } from '../mock';
import { prisma } from '../../utils/prisma';

// TODO: add prisma

// Employee Recipients

export const getAllEmployeeRecipients = async (id: number) => {
  const surveyEmployeeRecipients = await getAllSurveyEmployeeRecipients();
  return surveyEmployeeRecipients.filter(surveyEmployeeRecipient => surveyEmployeeRecipient.survey_id === id);
};

export const getAllEmployeeRecipientsByStatus = async (id: number, status: number) => {
  const surveyEmployeeRecipients = await getAllSurveyEmployeeRecipients();
  return surveyEmployeeRecipients.filter(surveyEmployeeRecipient => surveyEmployeeRecipient.survey_id === id && surveyEmployeeRecipient.survey_status_id === status);
};

export const createAnEmployeeRecipient = async (survey_id: number, surveyEmployeeRecipient: SurveyEmployeeRecipient) => {
  return {
    id: 4,
    first_name: 'First Name 4',
    last_name: 'Last Name 4',
    employee_id: '4',
    status: 'status 4',
    survey_id: survey_id
  }
};

export const updateAnEmployeeRecipient = async (id: number, recipient_id: number, surveyEmployeeRecipient: SurveyEmployeeRecipient) => {
  return {
    id: recipient_id,
    first_name: 'First Name Update 1',
    last_name: 'Last Name Update 1',
    employee_id: '4',
    status: 'status Update 1',
    survey_id: id,
  };
};

export const deleteAnEmployeeRecipient = async (id: number, recipient_id: number) => {
  return [];
};

// External Recipients

export const getAllExternalRecipients = async (id: number) => {
  const surveyExternalRecipients = await getAllSurveyExternalRecipients();
  return surveyExternalRecipients.filter(surveyExternalRecipient => surveyExternalRecipient.survey_id === id);
};

export const getAllExternalRecipientsStatus = async (id: number, status: number) => {
  const surveyExternalRecipients = await getAllSurveyExternalRecipients();
  return surveyExternalRecipients.filter(surveyExternalRecipient => surveyExternalRecipient.survey_id === id && surveyExternalRecipient.survey_status_id === status);
};

export const createAnExternalRecipient = async (survey_id: number, surveyExternalRecipient: SurveyExternalRecipient) => {
  return {
    id: 4,
    first_name: 'First Name 4',
    last_name: 'Last Name 4',
    email: 'email 4',
    status: 'status 4',
    survey_id: survey_id
  }
};

export const updateAnExternalRecipient = async (id: number, recipient_id: number,surveyExternalRecipient: SurveyExternalRecipient) => {
  return {
    id: recipient_id,
    first_name: 'First Name Update 1',
    last_name: 'Last Name Update 1',
    email: 'email Update 1',
    status: 'status Update 1',
    survey_id: id
  };
};

export const deleteAnExternalRecipient = async (id: number, recipient_id: number) => {
  return [];
};

// Recipients

export const getAllRecipients = async (id: number) => {
  const surveyEmployeeRecipients = await getAllEmployeeRecipients(id);
  const surveyExternalRecipients = await getAllExternalRecipients(id);
  return [...surveyEmployeeRecipients, ...surveyExternalRecipients];
};

export const getAllRecipientsByStatus = async (id: number, status: number) => {
  const surveyRecipients = await getAllRecipients(id);
  return surveyRecipients.filter(surveyRecipient => surveyRecipient.survey_status_id === status);
};

export const createARecipient = async (id: number, surveyRecipient: SurveyExternalRecipient | SurveyEmployeeRecipient) => {
  if (surveyRecipient.hasOwnProperty('employee_id')) {
    return {
      id: 4,
      employee_id: '4',
      survey_status_id: 4,
      survey_id: id,
    }
  }
  return {
    id: 4,
    email_address: 'email 4',
    survey_status_id: 4,
    survey_id: id
  }
};

export const updateARecipient = async (id: number, recipient_id: number, surveyRecipient: SurveyExternalRecipient | SurveyEmployeeRecipient) => {
  if (surveyRecipient.hasOwnProperty('employee_id')) {
    return {
      id: 4,
      employee_id: '4',
      survey_status_id: 4,
      survey_id: id,
    }
  }
  return {
    id: 4,
    email_address: 'email 4',
    survey_status_id: 4,
    survey_id: id
  }
};

export const deleteARecipient = async (id: number, recipient_id: number) => {
  return [];
};