import { Route, Routes } from "react-router-dom";
import Home from "./home";

const SharedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default SharedRoutes;