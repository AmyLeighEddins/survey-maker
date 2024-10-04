import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { SurveyTag } from '@/hooks/api/types';

type SurveyAssociatedTagsPut = {
  id: number;
  tags: SurveyTag[];
};

const usePutSurveyAssociatedTags = () => {
  return useMutation({
    mutationFn: async ({ id, tags }: SurveyAssociatedTagsPut) => {
      const response = await axios.put(
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

export default usePutSurveyAssociatedTags;
