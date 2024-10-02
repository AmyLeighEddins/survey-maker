import { SurveyFormQuestion, TemplateFormQuestion } from '@/hooks/api/types';

export const getRandomId = () => {
  return Math.floor(Math.random() * 1000000000000000);
};

export const getNextSequenceNumber = (
  questions: SurveyFormQuestion[] | TemplateFormQuestion[]
) => {
  return questions
    ? questions.reduce(
        (acc, question) => Math.max(acc, Number(question.sequence)),
        0
      ) + 1
    : 1;
};
