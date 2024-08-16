import { Navigate, Route, Routes } from "react-router-dom";
import LogIn from "./login";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default UnauthenticatedRoutes;