import { useContext } from "react";
import CatPreview from "../components/cat-preview.component";
import { CategoriesContext } from "../contexts/categories.context";
import "../main.css";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <main className="w-full">
      {Object.keys(categoriesMap).map((cat, i) => (
        <CatPreview key={i} cat={cat} products={categoriesMap[cat]} />
      ))}
    </main>
  );
};

export default Shop;
