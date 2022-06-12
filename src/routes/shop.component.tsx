import { Routes, Route } from "react-router-dom";
import Category from "./category.component";
import CatsPreview from "./cats-preview.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
