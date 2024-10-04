import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyTag } from '@/hooks/api/types';

type SurveyAssociatedTagsPost = {
  id: number;
  tags: SurveyTag[];
};

const usePostSurveyAssociatedTags = () => {
  return useMutation({
    mutationFn: async ({ id, tags }: SurveyAssociatedTagsPost) => {
      const response = await axios.post(
        `/surveys/${id}/tags`,
        tags.map((tag) => ({ survey_tag_id: tag.id }))
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostSurveyAssociatedTags;
