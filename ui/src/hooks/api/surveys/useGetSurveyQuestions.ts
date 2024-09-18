import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyQuestions = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/surveys/${id}/questions`], queryFn: async () => {
    const response = await axios(`/surveys/${id}/questions`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyQuestions;