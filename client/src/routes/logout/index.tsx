import Sidebar from "../../components/shared/Sidebar";
import { useAuthContext } from "../../context/AuthContext";
import { Button } from "@/components/ui/button";

const Logout = () => {
  const { logout } = useAuthContext();

  return (
    <>
      <Sidebar />
      <div>
        <h1>Logout</h1>
        <Button onClick={logout}>Logout</Button>
      </div>
    </>
  )
}

export default Logout;