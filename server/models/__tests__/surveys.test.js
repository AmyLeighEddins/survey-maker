"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const prisma_1 = require("../../test-utils/prisma");
const prisma_2 = require("../../utils/prisma");
jest.mock("@prisma/client");
describe('Survey Model', () => {
    describe('getAllSurveys', () => {
        it('should return all surveys', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const surveys = [
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
            prisma_1.prismaForTests.surveys = {
                findMany: jest.fn().mockResolvedValueOnce(surveys),
            };
            // Act;
            const result = yield __1.SurveyModel.getAllSurveys();
            // Assert
            expect(prisma_2.prisma.surveys.findMany).toHaveBeenCalledTimes(1);
            expect(prisma_2.prisma.surveys.findMany).toHaveBeenCalledWith(expect.objectContaining({
                orderBy: {
                    id: "asc",
                },
            }));
            expect(result).toEqual(surveys);
        }));
    });
    describe('createASurvey', () => {
        it('should create a survey', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const survey = {
                id: 4,
                summary: 'survey 4',
                created_date: new Date(),
                expiry_date: new Date(),
                survey_type_id: 1,
            };
            prisma_1.prismaForTests.surveys = {
                create: jest.fn().mockResolvedValueOnce(survey),
            };
            // Act;
            const result = yield __1.SurveyModel.createASurvey(survey);
            // Assert
            expect(prisma_2.prisma.surveys.create).toHaveBeenCalledTimes(1);
            expect(prisma_2.prisma.surveys.create).toHaveBeenCalledWith(expect.objectContaining({
                data: survey,
            }));
            expect(result).toEqual(survey);
        }));
    });
    describe('getSurveyById', () => {
        it('should return a survey', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            const survey = {
                id,
                summary: 'survey 1',
                created_date: new Date(),
                expiry_date: new Date(),
                survey_type_id: 1,
            };
            prisma_1.prismaForTests.surveys = {
                findUnique: jest.fn().mockResolvedValueOnce(survey),
            };
            // Act;
            const result = yield __1.SurveyModel.getSurveyById(id);
            // Assert
            expect(prisma_2.prisma.surveys.findUnique).toHaveBeenCalledTimes(id);
            expect(prisma_2.prisma.surveys.findUnique).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    id,
                },
            }));
            expect(result).toEqual(survey);
        }));
    });
    describe('updateASurvey', () => {
        it('should update a survey', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            const survey = {
                id,
                summary: 'survey update 1',
                created_date: new Date(),
                expiry_date: new Date(),
                survey_type_id: 1,
            };
            prisma_1.prismaForTests.surveys = {
                update: jest.fn().mockResolvedValueOnce(survey),
            };
            // Act;
            const result = yield __1.SurveyModel.updateASurvey(id, survey);
            // Assert
            expect(prisma_2.prisma.surveys.update).toHaveBeenCalledTimes(1);
            expect(prisma_2.prisma.surveys.update).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    id,
                },
                data: survey,
            }));
            expect(result).toEqual(survey);
        }));
    });
    describe('deleteASurvey', () => {
        it('should delete a survey', () => __awaiter(void 0, void 0, void 0, function* () {
            // Arrange
            const id = 1;
            const survey = {
                id,
                summary: 'survey 1',
                created_date: new Date(),
                expiry_date: new Date(),
                survey_type_id: 1,
            };
            prisma_1.prismaForTests.surveys = {
                delete: jest.fn().mockResolvedValueOnce(survey),
            };
            // Act;
            const result = yield __1.SurveyModel.deleteASurvey(id);
            // Assert
            expect(prisma_2.prisma.surveys.delete).toHaveBeenCalledTimes(id);
            expect(prisma_2.prisma.surveys.delete).toHaveBeenCalledWith(expect.objectContaining({
                where: {
                    id,
                },
            }));
            expect(result).toEqual(survey);
        }));
    });
});
