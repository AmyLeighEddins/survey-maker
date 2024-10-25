import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';

const useGetEmployeeRecipients = () => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ['employeeRecipients'],
    queryFn: async () => {
      const response = await axios('/recipients/employee');
      return response.data;
    },
  });

  return { isPending, error, data, isFetching, refetch };
};

export default useGetEmployeeRecipients;
