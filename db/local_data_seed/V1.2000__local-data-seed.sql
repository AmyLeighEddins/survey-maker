INSERT INTO SurveyTypes (id, description) VALUES (1, 'engagement');
INSERT INTO SurveyTypes (id, description) VALUES (2, 'vacation');
INSERT INTO SurveyTypes (id, description) VALUES (3, 'external');

INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (1, 'example 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);
INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (2, 'example 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2);
INSERT INTO Surveys (id, summary, created_date, expiry_date, survey_type_id) VALUES (3, 'example 3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3);
