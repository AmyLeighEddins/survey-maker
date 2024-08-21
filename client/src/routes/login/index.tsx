import Sidebar from "../../components/shared/Sidebar";
import { useAuthContext } from "../../context/AuthContext";

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
        <button onClick={signup}>Signup</button>
        <button onClick={signin}>Login</button>
      </div>
      </>
  )
}

export default Login;