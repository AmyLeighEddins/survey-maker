import { SurveyMetadataType } from '../../types';

export const getAllSurveyMetadataTypes = async () => {
  return [{
    id: 1,
    description: 'first name',
  }, {
    id: 2,
    description: 'last name',
  }, {
    id: 3,
    description: 'date',
  }]
};

export const createASurveyMetadataType = async (newSurveyMetadataType: SurveyMetadataType) => {
  return {
    id: 6,
    description: 'new metadatatype 6',
  };
};

export const deleteAllSurveyMetadataTypes = async () => {
  return [];
};

export const getSurveyMetadataTypeById = async (id: number) => {
  const surveyMetadataTypes = await getAllSurveyMetadataTypes();
  return surveyMetadataTypes.find(surveyMetadataType => surveyMetadataType.id === id);
};

export const updateASurveyMetadataType = async (surveyMetadataType: SurveyMetadataType) => {
  return {
    id: 1,
    description: 'update 1',
  };
};

export const deleteASurveyMetadataType = async (id: number) => {
  return [];
};