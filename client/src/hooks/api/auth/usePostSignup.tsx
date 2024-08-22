import { useMutation } from "@tanstack/react-query";
import axios from "../../../utils/axios";
import { UserSignup } from "../types";

const useAuth = () => {
  return useMutation({
    mutationFn: async ({ name, email, password }: UserSignup) => {
      const response = await axios.post('/auth/signup', {
        name,
        email,
        password,
      });
      return response.data;
    },
    onError: () => {
      throw new Error('Error signing up');
    },
  });
};

export default useAuth;