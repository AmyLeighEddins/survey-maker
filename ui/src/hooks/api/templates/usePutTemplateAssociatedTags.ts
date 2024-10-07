import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyTag } from '@/hooks/api/types';

type TemplateAssociatedTagsPut = {
  id: number;
  tags: SurveyTag[];
};

const usePutTemplateAssociatedTags = () => {
  return useMutation({
    mutationFn: async ({ id, tags }: TemplateAssociatedTagsPut) => {
      const response = await axios.put(
        `/templates/${id}/tags`,
        tags.map((tag) => ({ survey_tag_id: tag.id }))
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutTemplateAssociatedTags;
