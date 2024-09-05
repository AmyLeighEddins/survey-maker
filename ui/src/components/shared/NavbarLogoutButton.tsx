'use client';
import { logout } from "@/utils/actions";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NavbarLogoutButton = () => {
  const router = useRouter();

  const onLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <Button onClick={onLogout}>
      Logout
    </Button>
  );
}

export default NavbarLogoutButton;