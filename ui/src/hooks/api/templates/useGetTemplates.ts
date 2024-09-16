import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetTemplates = () => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: ['templates'], queryFn: async () => {
    const response = await axios('/templates');
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetTemplates;