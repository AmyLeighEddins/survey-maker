
import express, { NextFunction, Request, Response } from 'express';
import { exampleRouter, surveys, templates, auth } from './routers';
import { verifyTokenMiddleware } from './middleware/auth';
import { errorHandlerMiddleware } from './middleware/errors';

const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

app.use(express.json());

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
  apis: ['./routers/*.ts', `${__dirname}/routers/*.ts`, './routers/*/*.ts', `${__dirname}/routers/*/*.ts`],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

// Public routes
app.use('/auth', auth);

// app.use(verifyTokenMiddleware);

// Private routes
app.use('/example', exampleRouter);
app.use('/surveys', surveys);
app.use('/templates', templates);

app.use(errorHandlerMiddleware);

export { app };