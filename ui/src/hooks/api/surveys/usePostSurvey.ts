import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';

type SurveyPost = {
  summary: string;
  survey_type_id: number;
};

const usePostSurvey = () => {
  return useMutation({
    mutationFn: async (surveyData: SurveyPost) => {
      const response = await axios.post('/surveys', surveyData);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostSurvey;
