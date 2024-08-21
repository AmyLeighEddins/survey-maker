import { Navigate, Route, Routes } from "react-router-dom";
import Logout from "./logout";
import Surveys from "./surveys";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/surveys" element={<Surveys />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;