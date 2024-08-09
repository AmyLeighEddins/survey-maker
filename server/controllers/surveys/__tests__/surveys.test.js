"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mockRequest_1 = require("../../../test-utils/mockRequest");
const jest_when_1 = require("jest-when");
const surveyController = __importStar(require("../survey"));
const models_1 = require("../../../models");
jest.mock("../../../models/surveys/survey");
describe('Survey controller', () => {
    it('should return all surveys', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const req = (0, mockRequest_1.mockRequest)();
        const res = (0, mockRequest_1.mockResponse)();
        const next = (0, mockRequest_1.mockNext)();
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
        (0, jest_when_1.when)(models_1.SurveyModel.getAllSurveys)
            .mockReturnValue(Promise.resolve(mockReturnValue));
        // Act
        yield surveyController.getAllSurveys(req, res, next);
        // Assert
        expect(models_1.SurveyModel.getAllSurveys).toHaveBeenCalledTimes(1);
        expect(models_1.SurveyModel.getAllSurveys).toHaveBeenLastCalledWith();
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(mockReturnValue);
    }));
    it('should create a new survey', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const req = (0, mockRequest_1.mockRequest)({ body: {
                id: 3,
                summary: 'example 3',
                created_date: new Date(),
                expiry_date: new Date(),
                survey_type_id: 3,
            },
        });
        const res = (0, mockRequest_1.mockResponse)();
        const next = (0, mockRequest_1.mockNext)();
        const mockReturnValue = {
            id: 3,
            summary: 'example 3',
            created_date: new Date(),
            expiry_date: new Date(),
            survey_type_id: 3,
        };
        (0, jest_when_1.when)(models_1.SurveyModel.createASurvey)
            .mockReturnValue(Promise.resolve(mockReturnValue));
        // Act
        yield surveyController.createASurvey(req, res, next);
        // Assert
        expect(models_1.SurveyModel.createASurvey).toHaveBeenCalledTimes(1);
        expect(models_1.SurveyModel.createASurvey).toHaveBeenLastCalledWith(req.body);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(mockReturnValue);
    }));
    it('should return a survey by id', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const id = 1;
        const req = (0, mockRequest_1.mockRequest)({ params: { id } });
        const res = (0, mockRequest_1.mockResponse)();
        const next = (0, mockRequest_1.mockNext)();
        const mockReturnValue = {
            id: 1,
            summary: 'example',
            created_date: new Date(),
            expiry_date: new Date(),
            survey_type_id: 1,
        };
        (0, jest_when_1.when)(models_1.SurveyModel.getSurveyById)
            .calledWith(id)
            .mockReturnValue(Promise.resolve(mockReturnValue));
        // Act
        yield surveyController.getSurveyById(req, res, next);
        // Assert
        expect(models_1.SurveyModel.getSurveyById).toHaveBeenCalledTimes(1);
        expect(models_1.SurveyModel.getSurveyById).toHaveBeenLastCalledWith(req.params.id);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(mockReturnValue);
    }));
    it('should update a survey', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const id = 3;
        const req = (0, mockRequest_1.mockRequest)({
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
        const res = (0, mockRequest_1.mockResponse)();
        const next = (0, mockRequest_1.mockNext)();
        const mockReturnValue = {
            id: 3,
            summary: 'example 3',
            created_date: new Date(),
            expiry_date: new Date(),
            survey_type_id: 1,
        };
        (0, jest_when_1.when)(models_1.SurveyModel.updateASurvey)
            .calledWith(id, req.body)
            .mockReturnValue(Promise.resolve(mockReturnValue));
        // Act
        yield surveyController.updateASurvey(req, res, next);
        // Assert
        expect(models_1.SurveyModel.updateASurvey).toHaveBeenCalledTimes(1);
        expect(models_1.SurveyModel.updateASurvey).toHaveBeenLastCalledWith(id, req.body);
        expect(res.json).toHaveBeenCalledTimes(1);
        expect(res.json).toHaveBeenCalledWith(mockReturnValue);
    }));
    it('should delete a survey', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const id = 3;
        const req = (0, mockRequest_1.mockRequest)({ params: { id } });
        const res = (0, mockRequest_1.mockResponse)();
        const next = (0, mockRequest_1.mockNext)();
        const mockReturnValue = {
            id: 3,
            summary: 'example 3',
            created_date: new Date(),
            expiry_date: new Date(),
            survey_type_id: 1,
        };
        (0, jest_when_1.when)(models_1.SurveyModel.deleteASurvey)
            .calledWith(id)
            .mockReturnValue(Promise.resolve(mockReturnValue));
        // Act
        yield surveyController.deleteASurvey(req, res, next);
        // Assert
        expect(models_1.SurveyModel.deleteASurvey).toHaveBeenCalledTimes(1);
        expect(models_1.SurveyModel.deleteASurvey).toHaveBeenLastCalledWith(id);
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(204);
    }));
});
