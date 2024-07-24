import { Survey, SurveyMetadata, SurveyQuestion, SurveyExternalRecipient, SurveyEmployeeRecipient } from './types';
import { getAllSurveyMetadata, getAllSurveyQuestions, getAllSurveyExternalRecipients, getAllSurveyEmployeeRecipients } from './mock';

export const getAllSurveys = async () => {
  return [{
    id: 1,
    summary: 'example 1',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 1,
  }, {
    id: 2,
    summary: 'example 2',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 2,
  }, {
    id: 3,
    summary: 'example 3',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 3,
  }]
};

export const createASurvey = async (newSurvey: Survey) => {
  return {
    id: 4,
    summary: 'example 4',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 4,
  }
};

export const updateAllSurveys = async (survey: Survey) => {
  return [{
    id: 1,
    summary: 'update 1',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 1,
  }, {
    id: 2,
    summary: 'update 2',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 2,
  }, {
    id: 3,
    summary: 'update 3',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 3,
  }]
};

export const deleteAllSurveys = async () => {
  return [];
};

export const getSurveyById = async (id: number) => {
  const surveys = await getAllSurveys();
  return surveys.find(survey => survey.id === id);
};

export const updateASurvey = async (survey: Survey) => {
  return {
    id: 1,
    summary: 'update 1',
    created_date: '2015-01-01',
    expiry_date: '2099-01-01',
    survey_type_id: 1,
  }
};

export const deleteASurvey = async (id: number) => {
  return [];
};

export const getSurveysByType = async (type_id: number) => {
  const surveys = await getAllSurveys();
  return surveys.filter(survey => survey.survey_type_id === type_id);
};

export const getSurveyMetadata = async (id: number) => {
  const surveyMetadata = await getAllSurveyMetadata();
  return surveyMetadata.filter(surveyMetadata => surveyMetadata.survey_id === id);
};

// Questions

export const getSurveyQuestions = async (id: number) => {
  const surveyQuestions = await getAllSurveyQuestions();
  return surveyQuestions.filter(surveyQuestion => surveyQuestion.survey_id === id);
};

export const createASurveyQuestion = async (survey_id: number, surveyQuestion: SurveyQuestion) => {
  return {
    id: 4,
    title: 'Question 4',
    description: 'Description 4',
    tooltop: 'Tooltip 4',
    sequence: 4,
    survey_question_type_id: 4,
    survey_id: survey_id
  }
};

export const updateASurveyQuestion = async (id: number, surveyQuestion: SurveyQuestion) => {
  return {
    id: 1,
    title: 'Question Update 1',
    description: 'Description 1',
    tooltop: 'Tooltip 1',
    sequence: 1,
    survey_question_type_id: 1,
    survey_id: 1
  };
};

export const deleteASurveyQuestion = async (id: number) => {
  return [];
};

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
    email: 'email 4',
    status: 'status 4',
    survey_id: survey_id
  }
};

export const updateAnEmployeeRecipient = async (id: number, recipient_id: number, surveyEmployeeRecipient: SurveyEmployeeRecipient) => {
  return {
    id: recipient_id,
    first_name: 'First Name Update 1',
    last_name: 'Last Name Update 1',
    email: 'email Update 1',
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