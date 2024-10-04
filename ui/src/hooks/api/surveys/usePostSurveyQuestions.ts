import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyFormQuestion } from '@/hooks/api/types';

type SurveyQuestionsPost = {
  id: number;
  questions: SurveyFormQuestion[];
};

const usePostSurveyQuestions = () => {
  return useMutation({
    mutationFn: async ({ id, questions }: SurveyQuestionsPost) => {
      const response = await axios.post(
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

export default usePostSurveyQuestions;
