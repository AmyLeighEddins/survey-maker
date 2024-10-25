import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { ExternalRecipient } from '@/hooks/api/types';

type SurveyExternalRecipientsPut = {
  id: number;
  recipients: ExternalRecipient[];
};

const usePutSurveyExternalRecipients = () => {
  return useMutation({
    mutationFn: async ({ id, recipients }: SurveyExternalRecipientsPut) => {
      const response = await axios.put(`/surveys/${id}/recipients/external`, recipients);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutSurveyExternalRecipients;
