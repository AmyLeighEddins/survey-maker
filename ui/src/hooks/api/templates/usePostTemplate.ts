import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';

type TemplatePost = {
  summary: string;
  name: string;
  survey_type_id: number;
};

const usePostTemplate = () => {
  return useMutation({
    mutationFn: async (templateData: TemplatePost) => {
      const response = await axios.post('/templates', templateData);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostTemplate;
