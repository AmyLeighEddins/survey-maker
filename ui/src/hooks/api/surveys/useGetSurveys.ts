import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveys = () => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: ['surveys'], queryFn: async () => {
    const response = await axios('/surveys');
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveys;