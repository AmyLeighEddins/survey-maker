import { app } from '../../app';
import request from 'supertest';

describe('/surveys', () => {
  describe('GET /surveys', () => {
    it('should respond with an array containing surveys', async () => {
      await request(app)
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
    });
  });

  describe('GET /surveys/:id', () => {
    it('should respond with the survey requested', async () => {
      await request(app)
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
    });
  });

  describe('POST /surveys', () => {
    it('should create a new survey', async () => {
      const date = new Date();
      await request(app)
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
    });
  });

  describe('PUT /surveys/:id', () => {
    it('should update the survey requested', async () => {
      const date = new Date();
      await request(app)
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
    });
  });

  describe('DELETE /surveys/:id', () => {
    it('should delete the survey requested', async () => {
      await request(app)
        .delete('/surveys/1')
        .set('Accept', 'application/json')
        .expect(204)
    });
  });
});