import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { EmployeeRecipient } from '@/hooks/api/types';

type SurveyEmployeeRecipientsPut = {
  id: number;
  recipients: EmployeeRecipient[];
};

const usePutSurveyEmployeeRecipients = () => {
  return useMutation({
    mutationFn: async ({ id, recipients }: SurveyEmployeeRecipientsPut) => {
      const response = await axios.put(`/surveys/${id}/recipients/employee`, recipients);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePutSurveyEmployeeRecipients;
