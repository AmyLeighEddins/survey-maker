import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;