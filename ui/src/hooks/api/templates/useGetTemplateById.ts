import { useQuery } from "@tanstack/react-query"
import axios from "@/utils/axios";

const useGetTemplateById = (id: string) => {
  const { isPending, error, data, isFetching } = useQuery({ queryKey: [`/templates/${id}`], queryFn: async () => {
    const response = await axios(`/templates/${id}`);
    return response.data;
  }});

  return { isPending, error, data, isFetching };
};

export default useGetTemplateById;