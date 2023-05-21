import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "../pages/Items";
import ItemDetailPage from "../pages/ItemDetail";
import Header from "../container/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
