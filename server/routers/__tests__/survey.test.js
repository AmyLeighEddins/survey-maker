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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
describe('/surveys', () => {
    describe('GET /surveys', () => {
        it('should respond with an array containing surveys', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app)
                .get('/surveys')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                expect(Array.isArray(res.body)).toBe(true);
                expect(res.body.length).toBeGreaterThan(0);
                expect(res.body[0].id).toBeDefined();
                expect(res.body[0].summary).toBeDefined();
                expect(res.body[0].created_date).toBeDefined();
                expect(res.body[0].expiry_date).toBeDefined();
                expect(res.body[0].survey_type_id).toBeDefined();
            });
        }));
    });
    describe('GET /surveys/:id', () => {
        it('should respond with the survey requested', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app)
                .get('/surveys/1')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .expect((res) => {
                expect(res.body.id).toBe(1);
                expect(res.body.summary).toBe('example 1');
                expect(res.body.created_date).toBeDefined();
                expect(res.body.expiry_date).toBeDefined();
                expect(res.body.survey_type_id).toBe(1);
            });
        }));
    });
    describe('POST /surveys', () => {
        it('should create a new survey', () => __awaiter(void 0, void 0, void 0, function* () {
            const date = new Date();
            yield (0, supertest_1.default)(app_1.app)
                .post('/surveys')
                .set('Accept', 'application/json')
                .send({
                id: 4,
                summary: 'example 4',
                expiry_date: date,
                survey_type_id: 1,
            })
                .expect('Content-Type', /json/)
                .expect(201)
                .expect((res) => {
                expect(res.body.id).toBe(4);
                expect(res.body.summary).toBe('example 4');
                expect(res.body.created_date).toBeDefined();
                expect(res.body.expiry_date).toBe(date.toISOString());
                expect(res.body.survey_type_id).toBe(1);
            });
        }));
    });
    describe('PUT /surveys/:id', () => {
        it('should update the survey requested', () => __awaiter(void 0, void 0, void 0, function* () {
            const date = new Date();
            yield (0, supertest_1.default)(app_1.app)
                .put('/surveys/1')
                .set('Accept', 'application/json')
                .send({
                id: 1,
                summary: 'example 1 updated',
                expiry_date: date,
                survey_type_id: 1,
            })
                .expect('Content-Type', /json/)
                .expect(201)
                .expect((res) => {
                expect(res.body.id).toBe(1);
                expect(res.body.summary).toBe('example 1 updated');
                expect(res.body.created_date).toBeDefined();
                expect(res.body.expiry_date).toBe(date.toISOString());
                expect(res.body.survey_type_id).toBe(1);
            });
        }));
    });
    describe('DELETE /surveys/:id', () => {
        it('should delete the survey requested', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, supertest_1.default)(app_1.app)
                .delete('/surveys/1')
                .set('Accept', 'application/json')
                .expect(204);
        }));
    });
});
