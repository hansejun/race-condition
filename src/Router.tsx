import { BrowserRouter, Route, Routes } from "react-router-dom";
import Images from "./Images";
import Search from "./Search";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
