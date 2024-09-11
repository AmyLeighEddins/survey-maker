INSERT INTO Users (name, email, password) VALUES ('user1', 'user1@example.com', '$2a$10$24qHn24qsyz2gioa1qP.vuaLF9v3ixxwJ7AMI6S/Jci5MgIZBRF/.');
INSERT INTO Users (name, email, password) VALUES ('user2', 'user2@example.com', '$2a$10$24qHn24qsyz2gioa1qP.vuaLF9v3ixxwJ7AMI6S/Jci5MgIZBRF/.');
INSERT INTO Users (name, email, password) VALUES ('user3', 'user3@example.com', '$2a$10$24qHn24qsyz2gioa1qP.vuaLF9v3ixxwJ7AMI6S/Jci5MgIZBRF/.');

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
INSERT INTO SurveyQuestions (title, description, tooltip, sequence, survey_id, survey_question_type_id) VALUES ('What is your favorite color?', 'Please enter your favorite color', 'Enter your favorite color', 3, 1, 1);

INSERT INTO SurveyAssociatedTags (survey_tag_id, survey_id) VALUES (1, 1);
INSERT INTO SurveyAssociatedTags (survey_tag_id, survey_id) VALUES (2, 1);
INSERT INTO SurveyAssociatedTags (survey_tag_id, survey_id) VALUES (2, 2);
INSERT INTO SurveyAssociatedTags (survey_tag_id, survey_id) VALUES (3, 2);

INSERT INTO SurveyTemplates (name, summary, created_date, updated_date, survey_type_id) VALUES ('example 1', 'example 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO SurveyTemplates (name, summary, created_date, updated_date, survey_type_id) VALUES ('example 2', 'example 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO SurveyTemplates (name, summary, created_date, updated_date, survey_type_id) VALUES ('example 3', 'example 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO SurveyTemplateAssociatedTags (survey_tag_id, survey_template_id) VALUES (1, 1);
INSERT INTO SurveyTemplateAssociatedTags (survey_tag_id, survey_template_id) VALUES (2, 1);
INSERT INTO SurveyTemplateAssociatedTags (survey_tag_id, survey_template_id) VALUES (2, 2);
INSERT INTO SurveyTemplateAssociatedTags (survey_tag_id, survey_template_id) VALUES (3, 2);

INSERT INTO SurveyTemplateQuestions (title, description, tooltip, sequence, survey_template_id, survey_question_type_id) VALUES ('What is your name?', 'Please enter your name', 'Enter your full name', 1, 1, 1);
INSERT INTO SurveyTemplateQuestions (title, description, tooltip, sequence, survey_template_id, survey_question_type_id) VALUES ('What is your age?', 'Please enter your age', 'Enter your age', 2, 1, 5);

INSERT INTO SurveyTemplateMetadata (value, user_form_metadata_type_id, survey_template_id) VALUES ('test 1', 1, 1);
INSERT INTO SurveyTemplateMetadata (value, user_form_metadata_type_id, survey_template_id) VALUES ('test 2', 2, 1);
INSERT INTO SurveyTemplateMetadata (value, user_form_metadata_type_id, survey_template_id) VALUES ('test 3', 3, 1);

INSERT INTO SurveyEmployeeRecipients (employee_id, survey_id, survey_status_id) VALUES (1, 1, 1);
INSERT INTO SurveyEmployeeRecipients (employee_id, survey_id, survey_status_id) VALUES (2, 1, 1);
INSERT INTO SurveyEmployeeRecipients (employee_id, survey_id, survey_status_id) VALUES (3, 1, 1);

INSERT INTO SurveyExternalRecipients (email_address, survey_id, survey_status_id) VALUES ('test@example.com', 1, 1);
INSERT INTO SurveyExternalRecipients (email_address, survey_id, survey_status_id) VALUES ('test2@example.com', 1, 1);
INSERT INTO SurveyExternalRecipients (email_address, survey_id, survey_status_id) VALUES ('test3@example.com', 1, 1);

INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('Amy', 1);
INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('34', 2);
INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('teal', 3);
INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('Harry', 1);
INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('35', 2);
INSERT INTO SurveyResponseItems (value, survey_question_id) VALUES ('blue', 3);

INSERT INTO SurveyEmployeeResponses (survey_employee_recipient_id, survey_response_item_id) VALUES (1, 1);
INSERT INTO SurveyEmployeeResponses (survey_employee_recipient_id, survey_response_item_id) VALUES (1, 2);
INSERT INTO SurveyEmployeeResponses (survey_employee_recipient_id, survey_response_item_id) VALUES (1, 3);

INSERT INTO SurveyExternalResponses (survey_external_recipient_id, survey_response_item_id) VALUES (1, 4);
INSERT INTO SurveyExternalResponses (survey_external_recipient_id, survey_response_item_id) VALUES (1, 5);
INSERT INTO SurveyExternalResponses (survey_external_recipient_id, survey_response_item_id) VALUES (1, 6);
