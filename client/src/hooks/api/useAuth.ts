import { useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "../../utils/axios";
import storage from "../../utils/storage";
import { AuthContext } from "../../context/AuthContext";
import { UserLogin, UserSignup } from "./types";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  const signinMutation = useMutation({
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

  const signupMutation = useMutation({
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

  return { signinMutation, signupMutation };
};

export default useAuth;