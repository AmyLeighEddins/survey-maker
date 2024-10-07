import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';

type TemplatePut = {
  id: number;
  name: string;
  summary: string;
  survey_type_id: number;
};

const usePutTemplate = () => {
  return useMutation({
    mutationFn: async (templateData: TemplatePut) => {
      const response = await axios.put(
        `/templates/${templateData.id}`,
        templateData
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutTemplate;
