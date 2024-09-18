import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyById = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/surveys/${id}/tags`], queryFn: async () => {
    const response = await axios(`/surveys/${id}/tags`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyById;