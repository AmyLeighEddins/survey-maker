import Sidebar from "../../components/shared/Sidebar";
import { useAuth } from "../../context/AuthContext";

const LogOut = () => {
  const { logout } = useAuth();

  return (
    <>
      <Sidebar />
      <div>
        <h1>Logout</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  )
}

export default LogOut;