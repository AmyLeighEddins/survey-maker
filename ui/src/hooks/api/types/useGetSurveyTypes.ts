import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';

const useGetSurveyTypes = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['types'],
    queryFn: async () => {
      const response = await axios('/types');
      return response.data;
    },
  });

  return { isPending, error, data, isFetching };
};

export default useGetSurveyTypes;
