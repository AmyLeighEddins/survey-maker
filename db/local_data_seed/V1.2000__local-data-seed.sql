INSERT INTO Users (id, name, email, password) VALUES (1, 'user1', 'user1@example.com', 'password');
INSERT INTO Users (id, name, email, password) VALUES (2, 'user2', 'user2@example.com', 'password');
INSERT INTO Users (id, name, email, password) VALUES (3, 'user3', 'user3@example.com', 'password');

INSERT INTO SurveyTypes (id, description) VALUES (1, 'engagement');
INSERT INTO SurveyTypes (id, description) VALUES (2, 'vacation');
INSERT INTO SurveyTypes (id, description) VALUES (3, 'external');

INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (1, 'example 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (2, 'example 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (3, 'example 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);

INSERT INTO SurveyStatuses (id, name) VALUES (0, 'not-started');
INSERT INTO SurveyStatuses (id, name) VALUES (1, 'draft');
INSERT INTO SurveyStatuses (id, name) VALUES (2, 'completed');
INSERT INTO SurveyStatuses (id, name) VALUES (3, 'archived');

INSERT INTO SurveyTags (id, description) VALUES (1, 'fun');
INSERT INTO SurveyTags (id, description) VALUES (2, 'training');
INSERT INTO SurveyTags (id, description) VALUES (3, 'hard');