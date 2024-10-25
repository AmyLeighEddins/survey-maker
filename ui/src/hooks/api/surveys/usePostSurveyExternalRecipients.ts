import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { ExternalRecipient } from '../types';

type ExternalRecipientsPost = {
  id: number;
  recipients: ExternalRecipient[];
};

const usePostSurveyExternalRecipients = () => {
  return useMutation({
    mutationFn: async ({ id, recipients }: ExternalRecipientsPost) => {
      const response = await axios.post(
        `/surveys/${id}/recipients/external`,
        recipients.map((recipient) => ({
          email_address: recipient.email_address,
        }))
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostSurveyExternalRecipients;
