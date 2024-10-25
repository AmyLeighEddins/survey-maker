import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyEmployeeRecipients = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/surveys/${id}/recipients/employee`], queryFn: async () => {
    const response = await axios(`/surveys/${id}/recipients/employee`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyEmployeeRecipients;