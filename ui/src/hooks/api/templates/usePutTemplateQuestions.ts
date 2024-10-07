import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { TemplateFormQuestion } from '@/hooks/api/types';

type TemplateQuestionsPut = {
  id: number;
  questions: TemplateFormQuestion[];
};

const usePutTemplateQuestions = () => {
  return useMutation({
    mutationFn: async ({ id, questions }: TemplateQuestionsPut) => {
      const response = await axios.put(
        `/templates/${id}/questions`,
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

export default usePutTemplateQuestions;
