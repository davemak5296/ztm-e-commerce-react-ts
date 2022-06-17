import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../contexts/categories.context";
import { productsType, useParamsType } from "../types";
import PdtCard from "../components/ProductCard/pdt-card.component";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams<keyof useParamsType>() as useParamsType;
  const [products, setProducts] = useState<productsType[]>(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <main>
      <h2 className="my-8 flex justify-center text-5xl">
        <span className="cursor-pointer ">
          {typeof category == "string" ? category.toUpperCase() : null}
        </span>
      </h2>
      <section className="grid w-full grid-cols-4 gap-x-[10px] gap-y-[50px]">
        {products && products.map((product) => <PdtCard key={product.id} product={product} />)}
      </section>
    </main>
  );
};

export default Category;
