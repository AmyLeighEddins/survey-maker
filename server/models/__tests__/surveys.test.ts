import { SurveyModel } from "..";
import { prismaForTests } from "../../test-utils/prisma";
import { prisma } from "../../utils/prisma";
import { Survey } from "../models";

jest.mock("@prisma/client");

describe('Survey Model', () => {
  describe('getAllSurveys', () => {
    it('should return all surveys', async () => {
      // Arrange
      const surveys: Survey[] = [
        {
          id: 1,
          summary: 'survey 1',
          created_date: new Date(),
          expiry_date: new Date(),
          survey_type_id: 1,
        },
        {
          id: 2,
          summary: 'survey 2',
          created_date: new Date(),
          expiry_date: new Date(),
          survey_type_id: 2,
        },
        {
          id: 3,
          summary: 'survey 3',
          created_date: new Date(),
          expiry_date: new Date(),
          survey_type_id: 3,
        },
      ];
      prismaForTests.surveys = {
        findMany: jest.fn().mockResolvedValueOnce(surveys),
      };

      // Act;
      const result = await SurveyModel.getAllSurveys();

      // Assert
      expect(prisma.surveys.findMany).toHaveBeenCalledTimes(1);
      expect(prisma.surveys.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          orderBy: {
            id: "asc",
          },
        })
      );
      expect(result).toEqual(surveys);
    });
  });

  describe('createASurvey', () => {
    it('should create a survey', async () => {
      // Arrange
      const survey: Survey = {
        id: 4,
        summary: 'survey 4',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 1,
      };
      prismaForTests.surveys = {
        create: jest.fn().mockResolvedValueOnce(survey),
      };

      // Act;
      const result = await SurveyModel.createASurvey(survey);

      // Assert
      expect(prisma.surveys.create).toHaveBeenCalledTimes(1);
      expect(prisma.surveys.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: survey,
        })
      );
      expect(result).toEqual(survey);
    });
  });

  describe('getSurveyById', () => {
    it('should return a survey', async () => {
      // Arrange
      const id = 1;
      const survey: Survey = {
        id,
        summary: 'survey 1',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 1,
      };
      prismaForTests.surveys = {
        findUnique: jest.fn().mockResolvedValueOnce(survey),
      };

      // Act;
      const result = await SurveyModel.getSurveyById(id);

      // Assert
      expect(prisma.surveys.findUnique).toHaveBeenCalledTimes(id);
      expect(prisma.surveys.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id,
          },
        })
      );
      expect(result).toEqual(survey);
    });
  });

  describe('updateASurvey', () => {
    it('should update a survey', async () => {
      // Arrange
      const id = 1;
      const survey: Survey = {
        id,
        summary: 'survey update 1',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 1,
      };
      prismaForTests.surveys = {
        update: jest.fn().mockResolvedValueOnce(survey),
      };

      // Act;
      const result = await SurveyModel.updateASurvey(id, survey);

      // Assert
      expect(prisma.surveys.update).toHaveBeenCalledTimes(1);
      expect(prisma.surveys.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id,
          },
          data: survey,
        })
      );
      expect(result).toEqual(survey);
    });
  });

  describe('deleteASurvey', () => {
    it('should delete a survey', async () => {
      // Arrange
      const id = 1;
      const survey: Survey = {
        id,
        summary: 'survey 1',
        created_date: new Date(),
        expiry_date: new Date(),
        survey_type_id: 1,
      };
      prismaForTests.surveys = {
        delete: jest.fn().mockResolvedValueOnce(survey),
      };

      // Act;
      const result = await SurveyModel.deleteASurvey(id);

      // Assert
      expect(prisma.surveys.delete).toHaveBeenCalledTimes(id);
      expect(prisma.surveys.delete).toHaveBeenCalledWith(
        expect.objectContaining({
          where: {
            id,
          },
        })
      );
      expect(result).toEqual(survey);
    });
  });
});