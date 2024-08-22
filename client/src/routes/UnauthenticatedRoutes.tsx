import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;