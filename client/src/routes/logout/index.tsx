import Sidebar from "../../components/shared/Sidebar";
import { useAuthContext } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useAuthContext();

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

export default Logout;