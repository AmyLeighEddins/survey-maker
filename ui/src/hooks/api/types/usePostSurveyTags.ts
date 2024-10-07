import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';

const usePostSurveyTags = () => {
  return useMutation({
    mutationFn: async (description: string) => {
      const response = await axios.post('/tags', { description });
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostSurveyTags;
