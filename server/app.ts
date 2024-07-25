
import express from 'express';
import { employeeResponses, exampleRouter, externalResponses, questionTypes, metadataTypes,responseItems, surveys, tags, templates, types, statuses } from './routers';
import { authMiddlewareExample } from './middleware/auth';

const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Survey Maker',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routers/**.ts', `${__dirname}/routers/*.ts`],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(authMiddlewareExample);

app.use('/example', exampleRouter);
app.use('/surveys', surveys);
app.use('/survey-templates', templates);
app.use('/survey-tags', tags);
app.use('/survey-types', types);
app.use('/survey-statuses', statuses);
app.use('/survey-question-types', questionTypes);
app.use('/survey-metadata-types', metadataTypes);
app.use('/survey-external-responses', externalResponses);
app.use('/survey-employee-responses', employeeResponses);
app.use('/survey-response-items', responseItems);

export { app };