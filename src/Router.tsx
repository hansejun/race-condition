import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

import Search from "./Search";
import Timer from "./Timer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
