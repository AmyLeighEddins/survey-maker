import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyQuestionTypes = () => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: ['question-types'], queryFn: async () => {
    const response = await axios('/question-types');
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyQuestionTypes;