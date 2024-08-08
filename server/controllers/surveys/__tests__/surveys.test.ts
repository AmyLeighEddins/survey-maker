import { mockNext, mockRequest, mockResponse } from "../../../test-utils/mockRequest";
import { when } from "jest-when";

import * as surveyController from '../survey';
import { SurveyModel } from '../../../models';

jest.mock("../../../models/surveys/survey");

describe('Survey controller', () => {
  it('should return all surveys', async () => {
    // Arrange
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();
    const mockReturnValue = [{
      id: 1,
      summary: 'example',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 1,
    },
    {
      id: 2,
      summary: 'example 2',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 2,
    }];

    when(SurveyModel.getAllSurveys)
      .mockReturnValue(Promise.resolve(mockReturnValue));

    // Act
    await surveyController.getAllSurveys(req, res, next);

    // Assert
    expect(SurveyModel.getAllSurveys).toHaveBeenCalledTimes(1);
    expect(SurveyModel.getAllSurveys).toHaveBeenLastCalledWith();
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockReturnValue);
  });
  
  it('should create a new survey', async () => {
    // Arrange
    const req = mockRequest({ body: 
      {
        id: 3,
        summary: 'example 3',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 3,
      },
    });
    const res = mockResponse();
    const next = mockNext();
    const mockReturnValue = {
      id: 3,
      summary: 'example 3',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 3,
    };

    when(SurveyModel.createASurvey)
      .mockReturnValue(Promise.resolve(mockReturnValue));

    // Act
    await surveyController.createASurvey(req, res, next);

    // Assert
    expect(SurveyModel.createASurvey).toHaveBeenCalledTimes(1);
    expect(SurveyModel.createASurvey).toHaveBeenLastCalledWith(req.body);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockReturnValue);
  });
  
  it ('should return a survey by id', async () => {
    // Arrange
    const id = 1;
    const req = mockRequest({ params: { id } });
    const res = mockResponse();
    const next = mockNext();
    const mockReturnValue = {
      id: 1,
      summary: 'example',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 1,
    };

    when(SurveyModel.getSurveyById)
      .calledWith(id)
      .mockReturnValue(Promise.resolve(mockReturnValue));

    // Act
    await surveyController.getSurveyById(req, res, next);

    // Assert
    expect(SurveyModel.getSurveyById).toHaveBeenCalledTimes(1);
    expect(SurveyModel.getSurveyById).toHaveBeenLastCalledWith(req.params.id);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockReturnValue);
  });

  it('should update a survey', async () => {
    // Arrange
    const id = 3;
    const req = mockRequest({
      params: {
        id,
      },
      body: {
        id: 3,
        summary: 'example 3',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 1,
      },
    });
    const res = mockResponse();
    const next = mockNext();
    const mockReturnValue = {
      id: 3,
      summary: 'example 3',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 1,
    };

    when(SurveyModel.updateASurvey)
      .calledWith(id, req.body)
      .mockReturnValue(Promise.resolve(mockReturnValue));

    // Act
    await surveyController.updateASurvey(req, res, next);

    // Assert
    expect(SurveyModel.updateASurvey).toHaveBeenCalledTimes(1);
    expect(SurveyModel.updateASurvey).toHaveBeenLastCalledWith(id, req.body);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockReturnValue);
  });

  it('should delete a survey', async () => {
    // Arrange
    const id = 3;
    const req = mockRequest({ params: { id } });
    const res = mockResponse();
    const next = mockNext();
    const mockReturnValue = {
      id: 3,
      summary: 'example 3',
      created_date: new Date(),
      expiry_date: new Date(),
      survey_type_id: 1,
    };

    when(SurveyModel.deleteASurvey)
      .calledWith(id)
      .mockReturnValue(Promise.resolve(mockReturnValue));

    // Act
    await surveyController.deleteASurvey(req, res, next);

    // Assert
    expect(SurveyModel.deleteASurvey).toHaveBeenCalledTimes(1);
    expect(SurveyModel.deleteASurvey).toHaveBeenLastCalledWith(id);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(204);
  });
});