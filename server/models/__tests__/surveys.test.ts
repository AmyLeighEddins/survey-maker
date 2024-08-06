import { SurveyModel } from "..";
import { prismaForTests } from "../../testUtils/prisma";
import { prisma } from "../../utils/prisma";
import { Survey } from "../types";

jest.mock("@prisma/client");

describe('Survey Model', () => {
  describe('getAllSurveys', () => {
    it('should return all surveys', async () => {
      // Arrange
      const surveys: Survey[] = [
        {
          id: 1,
          summary: 'string',
          created_date: new Date(),
          expiry_date: new Date(),
          survey_type_id: 1,
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
});