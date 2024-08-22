import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "../ui/button";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5">
        <div className="relative flex h-16 w-full">
          <div className="font-bold text-2xl text-white flex items-center">Survey Maker</div>
          <div className="margin-left-2 w-1/2 flex flex-auto items-center font-bold text-slate-300">
              <Link to="/" className="pl-6 p-2">
                  Dashboard
              </Link>
              <Link to="/surveys" className="p-2">
                  Surveys
              </Link>
          </div>
          <div className="items-center flex justify-end">
            {isLoggedIn ? (
              <Button onClick={logout}>
                Logout
              </Button>
            ) :
              <Button>
                <Link to="/login">
                    Login
                </Link>
              </Button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;