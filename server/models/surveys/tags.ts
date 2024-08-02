import { SurveyTag } from '../types';

export const getAllSurveyTags = async () => {
  return [{
    id: 1,
    description: 'engagement',
  }, {
    id: 2,
    description: 'fun',
  }, {
    id: 3,
    description: 'vacation',
  }, {
    id: 4,
    description: 'external',
  }, {
    id: 5,
    description: 'company',
  }];
};

export const createASurveyTag = async (newSurveyTag: SurveyTag) => {
  return {
    id: 6,
    description: 'new tag 6',
  };
};

export const deleteAllSurveyTags = async () => {
  return [];
};

export const getSurveyTagById = async (id: number) => {
  const surveyTags = await getAllSurveyTags();
  return surveyTags.find(surveyTag => surveyTag.id === id);
};

export const updateASurveyTag = async (surveyTag: SurveyTag) => {
  return {
    id: 1,
    description: 'update 1',
  };
};

export const deleteASurveyTag = async (id: number) => {
  return [];
};