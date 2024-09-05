import Link from "next/link";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { getUser } from "@/utils/actions";

const Navbar = async () => {
  const { user } = await getUser();

  return (
    <div className="w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5">
        <div className="relative flex h-16 w-full">
          <div className="font-bold text-2xl text-white flex items-center">Survey Maker</div>
          <div className="margin-left-2 w-1/2 flex flex-auto items-center font-bold text-slate-300">
              <Link href="/dashboard" className="pl-6 p-2">
                  Dashboard
              </Link>
              <Link href="/surveys" className="p-2">
                  Surveys
              </Link>
          </div>
          <div className="items-center flex justify-end">
            {user ? (
              <NavbarLogoutButton />
            ) :
              null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;