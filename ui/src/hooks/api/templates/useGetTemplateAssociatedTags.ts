import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyById = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/templates/${id}/tags`], queryFn: async () => {
    const response = await axios(`/templates/${id}/tags`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyById;