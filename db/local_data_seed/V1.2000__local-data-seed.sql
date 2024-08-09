INSERT INTO Users (name, email, password) VALUES ('user1', 'user1@example.com', 'password');
INSERT INTO Users (name, email, password) VALUES ('user2', 'user2@example.com', 'password');
INSERT INTO Users (name, email, password) VALUES ('user3', 'user3@example.com', 'password');

INSERT INTO SurveyTypes (description) VALUES ('engagement');
INSERT INTO SurveyTypes (description) VALUES ('vacation');
INSERT INTO SurveyTypes (description) VALUES ('external');

INSERT INTO Surveys (summary, created_date, expiry_date, survey_type_id) VALUES ('example 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO Surveys (summary, created_date, expiry_date, survey_type_id) VALUES ('example 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO Surveys (summary, created_date, expiry_date, survey_type_id) VALUES ('example 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO SurveyStatuses (name) VALUES ('not-started');
INSERT INTO SurveyStatuses (name) VALUES ('draft');
INSERT INTO SurveyStatuses (name) VALUES ('completed');
INSERT INTO SurveyStatuses (name) VALUES ('archived');

INSERT INTO SurveyTags (description) VALUES ('fun');
INSERT INTO SurveyTags (description) VALUES ('training');
INSERT INTO SurveyTags (description) VALUES ('hard');

INSERT INTO SurveyMetadataTypes (description) VALUES ('location');
INSERT INTO SurveyMetadataTypes (description) VALUES ('created_date');
INSERT INTO SurveyMetadataTypes (description) VALUES ('updated_date');

INSERT INTO SurveyMetadata (value, user_form_metadata_type_id, survey_id) VALUES ('test 1', 1, 1);
INSERT INTO SurveyMetadata (value, user_form_metadata_type_id, survey_id) VALUES ('test 2', 2, 1);
INSERT INTO SurveyMetadata (value, user_form_metadata_type_id, survey_id) VALUES ('test 3', 3, 1);

INSERT INTO SurveyQuestionTypes (description) VALUES ('text');
INSERT INTO SurveyQuestionTypes (description) VALUES ('checkbox');
INSERT INTO SurveyQuestionTypes (description) VALUES ('radio');
INSERT INTO SurveyQuestionTypes (description) VALUES ('dropdown');
INSERT INTO SurveyQuestionTypes (description) VALUES ('number');

INSERT INTO SurveyQuestions (title, description, tooltip, sequence, survey_id, survey_question_type_id) VALUES ('What is your name?', 'Please enter your name', 'Enter your full name', 1, 1, 1);
INSERT INTO SurveyQuestions (title, description, tooltip, sequence, survey_id, survey_question_type_id) VALUES ('What is your age?', 'Please enter your age', 'Enter your age', 2, 1, 5);