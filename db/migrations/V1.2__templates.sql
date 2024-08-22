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