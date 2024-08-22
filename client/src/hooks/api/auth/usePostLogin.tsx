import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import storage from "@/utils/storage";
import { AuthContext } from "@/context/AuthContext";
import { UserLogin } from "@/hooks/api/types";

const usePostLogin = () => {
  const authContext = useContext(AuthContext);

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
      storage.setToken(token);
      authContext.setUserToken(token);
    },
    onError: () => {
      throw new Error('Error logging in');
    },
  });
};

export default usePostLogin;