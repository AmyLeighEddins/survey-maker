import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';

type SurveyPut = {
  id: number;
  summary: string;
  survey_type_id: number;
  expiry_date: Date;
};

const usePutSurvey = () => {
  return useMutation({
    mutationFn: async (surveyData: SurveyPut) => {
      const response = await axios.put(`/surveys/${surveyData.id}`, surveyData);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutSurvey;
