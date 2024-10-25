import { useMutation } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { EmployeeRecipient } from '../types';

type EmployeeRecipientsPost = {
  id: number;
  recipients: EmployeeRecipient[];
};

const usePostSurveyEmployeeRecipients = () => {
  return useMutation({
    mutationFn: async ({ id, recipients }: EmployeeRecipientsPost) => {
      const response = await axios.post(
        `/surveys/${id}/recipients/employee`,
        recipients.map((recipient) => ({
          employee_id: recipient.employee_id,
        }))
      );
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
  });
};

export default usePostSurveyEmployeeRecipients;
