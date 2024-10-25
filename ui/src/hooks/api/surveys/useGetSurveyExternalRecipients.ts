import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetSurveyExternalRecipients = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/surveys/${id}/recipients/external`], queryFn: async () => {
    const response = await axios(`/surveys/${id}/recipients/external`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetSurveyExternalRecipients;