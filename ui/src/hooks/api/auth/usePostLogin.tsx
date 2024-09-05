import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { UserLogin } from "@/hooks/api/types";
import { setAuthCookie } from "@/utils/actions";

const usePostLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }: UserLogin) => {
      const response = await axios.post('/auth/signin', {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: async (res) => {
      const token = res.accessToken;
      setAuthCookie(token);
    },
    onError: () => {
      throw new Error('Error logging in');
    },
  });
};

export default usePostLogin;