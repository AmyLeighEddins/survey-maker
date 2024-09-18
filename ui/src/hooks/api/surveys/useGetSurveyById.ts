import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyById = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/surveys/${id}`], queryFn: async () => {
    const response = await axios(`/surveys/${id}`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyById;