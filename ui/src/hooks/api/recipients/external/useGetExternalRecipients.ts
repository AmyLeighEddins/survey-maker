import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';

const useGetExternalRecipients = () => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ['externalRecipients'],
    queryFn: async () => {
      const response = await axios('/recipients/external');
      return response.data;
    },
  });

  return { isPending, error, data, isFetching, refetch };
};

export default useGetExternalRecipients;
