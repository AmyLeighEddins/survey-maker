import { Navigate, Route, Routes } from "react-router-dom";
import LogOut from "./logout";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/logout" element={<LogOut />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AuthenticatedRoutes;