import Sidebar from "../../components/shared/Sidebar";
import { useAuth } from "../../context/AuthContext";
import storage from "../../utils/storage";

const LogIn = () => {
  const { setUserToken } = useAuth();

  const signup = async () => {
    const res = await fetch('http://localhost:3000/auth/signup', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({
        name: 'test',
        email: 'amy@example.com',
        password: 'password',
      }),
    });

    if (!res.ok) {
      throw new Error('Error signing up');
    }
  };

  const login = async () => {
    const res = await fetch('http://localhost:3000/auth/signin', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({
        email: 'amy@example.com',
        password: 'password',
      }),
    });

    if (!res.ok) {
      throw new Error('Error logging in');
    }

    const resData = await res.json();
    const token = resData.accessToken;
    storage.setToken(token);
    setUserToken(token);
  };

  return (
    <>
      <Sidebar />
      <div>
        <h1>Login</h1>
        <button onClick={signup}>Signup</button>
        <button onClick={login}>Login</button>
      </div>
      </>
  )
}

export default LogIn;