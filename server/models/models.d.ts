export type SurveyTemplate = {
  id: number;
  name: string;
  summary: string;
  created_date: Date;
  updated_date: Date;
  survey_type_id: number;
};

export type SurveyTemplateQuestion = {
  id: number;
  title: string;
  description: string;
  tooltip: string;
  sequence: number;
  survey_question_type_id: number;
  survey_template_id: number;
};

export type SurveyTemplatesMetadata = {
  id: number;
  value: string;
  user_form_metadata_type_id: number;
  survey_template_id: number;
};

export type SurveyStatus = {
  id: number,
  name: string,
};

export type SurveyType = {
  id: number,
  description: string,
};

export type SurveyTag = {
  id: number,
  description: string,
};

export type SurveyAssociatedTag = {
  id: number,
  survey_tag_id: number,
  survey_id: number,
};

export type SurveyMetadataType = {
  id: number,
  description: string,
};

export type SurveyEmployeeResponse = {
  id: number,
  survey_employee_recipient_id: number,
  survey_response_item_id: number,
};

export type SurveyExternalResponse = {
  id: number,
  survey_external_recipient_id: number,
  survey_response_item_id: number,
};

export type Survey = {
  id: number;
  summary: string;
  created_date: Date;
  expiry_date: Date;
  survey_type_id: number;
};

export type SurveyResponseItem = {
  id: number;
  value: string;
  survey_question_id: number;
}

export type SurveyQuestionType = {
  id: number,
  description: string,
};

export type SurveyMetadata = {
  id: number;
  value: string;
  user_form_metadata_type_id: number;
  survey_id: number;
};

export type SurveyQuestion = {
  id: number;
  title: string;
  description: string;
  tooltip: string;
  sequence: number;
  survey_question_type_id: number;
  survey_id: number;
};

export type SurveyExternalRecipient = {
  id: number;
  email_address: string;
  survey_status_id: number;
  survey_id: number;
};

export type SurveyEmployeeRecipient = {
  id: number;
  employee_id: number;
  survey_status_id: number;
  survey_id: number;
};


