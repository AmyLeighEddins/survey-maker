import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyTag } from '@/hooks/api/types';

type TemplateAssociatedTagsPost = {
  id: number;
  tags: SurveyTag[];
};

const usePostTemplateAssociatedTags = () => {
  return useMutation({
    mutationFn: async ({ id, tags }: TemplateAssociatedTagsPost) => {
      const response = await axios.post(
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

export default usePostTemplateAssociatedTags;
