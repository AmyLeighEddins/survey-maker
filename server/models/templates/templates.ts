import { SurveyTemplate, SurveyTemplateQuestion } from '../types';
import { getAllSurveyTemplateQuestions } from '../mock';

export const getAllSurveyTemplates = async () => {
  return [
    {
      id: 1,
      name: 'Template 1',
      summary: 'Summary 1',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 1
    },
    {
      id: 2,
      name: 'Template 2',
      summary: 'Summary 2',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 2
    },
    {
      id: 3,
      name: 'Template 3',
      summary: 'Summary 3',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 3
    },
  ]
};

export const createASurveyTemplate = async (surveyTemplate: SurveyTemplate) => {
  return {
    id: 4,
    name: 'Template 4',
    summary: 'Summary 4',
    created_date: new Date(),
    updated_date: new Date(),
    survey_type_id: 4
  }
};

export const updateAllSurveyTemplates = async (surveyTemplate: SurveyTemplate) => {
  return [
    {
      id: 1,
      name: 'Template 1',
      summary: 'Update 1',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 1
    },
    {
      id: 2,
      name: 'Template 2',
      summary: 'Update 2',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 2
    },
    {
      id: 3,
      name: 'Template 3',
      summary: 'Update 3',
      created_date: new Date(),
      updated_date: new Date(),
      survey_type_id: 3
    },
  ]
};

export const deleteAllSurveyTemplates = async () => {
  return [];
};

export const getASurveyTemplateById = async (id: number) => {
  const surveyTemplates = await getAllSurveyTemplates();
  return surveyTemplates.find(surveyTemplate => surveyTemplate.id === id);
};

export const getASurveyTemplateByType = async (type_id: number) => {
  const surveyTemplates = await getAllSurveyTemplates();
  return surveyTemplates.find(surveyTemplate => surveyTemplate.survey_type_id === type_id);
};

// export const getASurveyTemplateByUser = async (id: number) => {
//   const surveyTemplates = await getAllSurveyTemplates();
//   return surveyTemplates.find(surveyTemplate => surveyTemplate.user_id === id);
// };

export const updateASurveyTemplate = async (surveyTemplate: SurveyTemplate) => {
  return {
    id: 1,
    name: 'Template 1',
    summary: 'Update 1',
    created_date: new Date(),
    updated_date: new Date(),
    survey_type_id: 1
  };
};

export const deleteASurveyTemplate = async (id: number) => {
  return [];
};

export const getAllTemplateQuestions = async (id: number) => {
  const surveyTemplateQuestions = await getAllSurveyTemplateQuestions();
  return surveyTemplateQuestions.filter(surveyTemplateQuestion => surveyTemplateQuestion.survey_template_id === id);
};

export const getATemplateQuestion = async (id: number) => {
  const surveyTemplateQuestions = await getAllSurveyTemplateQuestions();
  return surveyTemplateQuestions.find(surveyTemplateQuestion => surveyTemplateQuestion.id === id);
};

export const createATemplateQuestion = async (survey_template_id: number, surveyTemplateQuestion: SurveyTemplateQuestion) => {
  return {
    id: 4,
    title: 'Question 4',
    description: 'Description 4',
    tooltop: 'Tooltip 4',
    sequence: 4,
    survey_question_type_id: 4,
    survey_template_id,
  }
};

export const updateATemplateQuestion = async (survey_template_id: number, question_id: number, surveyTemplateQuestion: SurveyTemplateQuestion) => {
  return {
    id: question_id,
    title: 'Question Update 1',
    description: 'Description 1',
    tooltop: 'Tooltip 1',
    sequence: 1,
    survey_question_type_id: 1,
    survey_template_id,
  };
};

export const deleteATemplateQuestion = async (id: number) => {
  return [];
};