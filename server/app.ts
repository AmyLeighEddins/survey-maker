
import express from 'express';
import { employeeResponses, exampleRouter, externalResponses, questionTypes, metadataTypes,responseItems, surveys, tags, templates, types, statuses } from './routers';
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

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