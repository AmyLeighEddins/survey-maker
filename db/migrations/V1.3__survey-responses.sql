CREATE TABLE IF NOT EXISTS SurveyAssociatedTags (
  id SERIAL PRIMARY KEY,
  survey_tag_id INTEGER NOT NULL,
  survey_id INTEGER NOT NULL,
  FOREIGN KEY (survey_tag_id) REFERENCES SurveyTags (id),
  FOREIGN KEY (survey_id) REFERENCES Surveys (id)
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