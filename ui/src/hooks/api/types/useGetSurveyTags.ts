import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';

const useGetSurveyTags = () => {
  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const response = await axios('/tags');
      return response.data;
    },
  });

  return { isPending, error, data, isFetching, refetch };
};

export default useGetSurveyTags;
