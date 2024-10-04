import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyFormQuestion } from '@/hooks/api/types';

type SurveyQuestionsPut = {
  id: number;
  questions: SurveyFormQuestion[];
};

const usePutSurveyQuestions = () => {
  return useMutation({
    mutationFn: async ({ id, questions }: SurveyQuestionsPut) => {
      const response = await axios.put(
        `/surveys/${id}/questions`,
        questions.map((question) => ({
          ...question,
          sequence: Number(question.sequence),
          survey_question_type_id: Number(question.survey_question_type_id),
        }))
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutSurveyQuestions;
