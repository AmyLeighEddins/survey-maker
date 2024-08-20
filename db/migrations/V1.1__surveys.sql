CREATE TABLE IF NOT EXISTS SurveyTypes (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Surveys (
  id SERIAL PRIMARY KEY,
  summary VARCHAR(255) NOT NULL,
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expiry_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  survey_type_id INTEGER NOT NULL,
  FOREIGN KEY (survey_type_id) REFERENCES SurveyTypes (id)
);

CREATE TABLE IF NOT EXISTS SurveyStatuses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SurveyTags (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SurveyMetadataTypes (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SurveyMetadata (
  id SERIAL PRIMARY KEY,
  value VARCHAR(255) NOT NULL,
  user_form_metadata_type_id INTEGER NOT NULL,
  survey_id INTEGER NOT NULL,
  FOREIGN KEY (user_form_metadata_type_id) REFERENCES SurveyMetadataTypes (id),
  FOREIGN KEY (survey_id) REFERENCES Surveys (id)
);

CREATE TABLE IF NOT EXISTS SurveyQuestionTypes (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SurveyQuestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  tooltip VARCHAR(255) NOT NULL,
  sequence INTEGER NOT NULL,
  survey_id INTEGER NOT NULL,
  survey_question_type_id INTEGER NOT NULL,
  FOREIGN KEY (survey_id) REFERENCES Surveys (id),
  FOREIGN KEY (survey_question_type_id) REFERENCES SurveyQuestionTypes (id)
);

CREATE TABLE IF NOT EXISTS SurveyAssociatedTags (
  id SERIAL PRIMARY KEY,
  survey_tag_id INTEGER NOT NULL,
  survey_id INTEGER NOT NULL,
  FOREIGN KEY (survey_tag_id) REFERENCES SurveyTags (id),
  FOREIGN KEY (survey_id) REFERENCES Surveys (id)
);

CREATE TABLE IF NOT EXISTS SurveyTemplates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  survey_type_id INTEGER NOT NULL,
  FOREIGN KEY (survey_type_id) REFERENCES SurveyTypes (id)
);

CREATE TABLE IF NOT EXISTS SurveyTemplateAssociatedTags (
  id SERIAL PRIMARY KEY,
  survey_tag_id INTEGER NOT NULL,
  survey_template_id INTEGER NOT NULL,
  FOREIGN KEY (survey_tag_id) REFERENCES SurveyTags (id),
  FOREIGN KEY (survey_template_id) REFERENCES SurveyTemplates (id)
);

CREATE TABLE IF NOT EXISTS SurveyTemplateQuestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  tooltip VARCHAR(255) NOT NULL,
  sequence INTEGER NOT NULL,
  survey_template_id INTEGER NOT NULL,
  survey_question_type_id INTEGER NOT NULL,
  FOREIGN KEY (survey_template_id) REFERENCES SurveyTemplates (id),
  FOREIGN KEY (survey_question_type_id) REFERENCES SurveyQuestionTypes (id)
);

CREATE TABLE IF NOT EXISTS SurveyTemplateMetadata (
  id SERIAL PRIMARY KEY,
  value VARCHAR(255) NOT NULL,
  user_form_metadata_type_id INTEGER NOT NULL,
  survey_template_id INTEGER NOT NULL,
  FOREIGN KEY (user_form_metadata_type_id) REFERENCES SurveyMetadataTypes (id),
  FOREIGN KEY (survey_template_id) REFERENCES SurveyTemplates (id)
);

CREATE TABLE IF NOT EXISTS SurveyEmployeeRecipients (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL,
  survey_id INTEGER NOT NULL,
  survey_status_id INTEGER NOT NULL,
  FOREIGN KEY (survey_id) REFERENCES Surveys (id),
  FOREIGN KEY (survey_status_id) REFERENCES SurveyStatuses (id)
);

CREATE TABLE IF NOT EXISTS SurveyExternalRecipients (
  id SERIAL PRIMARY KEY,
  email_address VARCHAR(255) NOT NULL,
  survey_id INTEGER NOT NULL,
  survey_status_id INTEGER NOT NULL,
  FOREIGN KEY (survey_id) REFERENCES Surveys (id),
  FOREIGN KEY (survey_status_id) REFERENCES SurveyStatuses (id)
);

CREATE TABLE IF NOT EXISTS SurveyResponseItems (
  id SERIAL PRIMARY KEY,
  value VARCHAR(255) NOT NULL,
  survey_question_id INTEGER NOT NULL,
  FOREIGN KEY (survey_question_id) REFERENCES SurveyQuestions (id)
);

CREATE TABLE IF NOT EXISTS SurveyEmployeeResponses (
  id SERIAL PRIMARY KEY,
  survey_employee_recipient_id INTEGER NOT NULL,
  survey_response_item_id INTEGER NOT NULL,
  FOREIGN KEY (survey_employee_recipient_id) REFERENCES SurveyEmployeeRecipients (id),
  FOREIGN KEY (survey_response_item_id) REFERENCES SurveyResponseItems (id)
);

CREATE TABLE IF NOT EXISTS SurveyExternalResponses (
  id SERIAL PRIMARY KEY,
  survey_external_recipient_id INTEGER NOT NULL,
  survey_response_item_id INTEGER NOT NULL,
  FOREIGN KEY (survey_external_recipient_id) REFERENCES SurveyExternalRecipients (id),
  FOREIGN KEY (survey_response_item_id) REFERENCES SurveyResponseItems (id)
);