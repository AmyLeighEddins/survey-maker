import Link from "next/link";
import { getUser } from "@/utils/actions";
import CreateSurveyButton from "@/components/shared/CreateSurveyButton";
import CreateTemplateButton from "@/components/shared/CreateTemplateButton";
import NavbarUserDropdown from "@/components/shared/NavbarUserDropdown";

const Navbar = async () => {
  const { user } = await getUser();

  return (
    <div className="w-full bg-gray-800">
      <div className="mx-auto max-w-8xl px-2 sm:px-3 lg:px-4">
        <div className="relative flex h-16 w-full">
          <div className="font-bold md:text-md lg:text-2xl text-white flex items-center">Survey Maker</div>
          <div className="margin-left-2 w-1/2 flex flex-auto items-center font-bold text-slate-300">
            <Link href="/dashboard" className="pl-6 p-2">
              Dashboard
            </Link>
            <Link href="/surveys" className="p-2">
              Surveys
            </Link>
            <Link href="/templates" className="p-2">
              Templates
            </Link>
          </div>
          <div className="items-center flex justify-end">
            {user ? (
              <div className="flex items-center gap-2">
                <CreateSurveyButton />
                <CreateTemplateButton />
                <NavbarUserDropdown />
              </div>
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