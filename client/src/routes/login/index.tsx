import Sidebar from "../../components/shared/Sidebar";
import { useAuthContext } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";

const Login = () => {
  const { signinMutation, signupMutation } = useAuthContext();

  const signin = () => {
    signinMutation.mutate({
      email: 'amy@gmail.com',
      password: 'password',
    });
  };

  const signup = () => {
    signupMutation.mutate({
      name: 'test',
      email: 'amy@gmail.com',
      password: 'password',
    });
  };

  return (
    <>
      <Sidebar />
      <div>
        <h1>Login</h1>
        <Button onClick={signup}>Signup</Button>
        <Button onClick={signin}>Login</Button>
      </div>
      </>
  )
}

export default Login;