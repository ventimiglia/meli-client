import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import ItemsPage from "../pages/Items";
import ItemDetailPage from "../pages/Item";

const Router = () => {
  return (
    <BrowserRouter>
      <SearchBox />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
