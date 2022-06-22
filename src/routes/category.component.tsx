import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../store/category/categories.selector';
import { productsType, useParamsType } from '../types';
import PdtCard from '../components/ProductCard/pdt-card.component';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams<keyof useParamsType>() as useParamsType;
  const [products, setProducts] = useState<productsType[]>(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <main>
      <h2 className="my-8 flex justify-center text-5xl">
        <span className="cursor-pointer ">
          {typeof category == 'string' ? category.toUpperCase() : null}
        </span>
      </h2>
      <section className="grid w-full grid-cols-4 gap-x-[10px] gap-y-[50px]">
        {products && products.map((product) => <PdtCard key={product.id} product={product} />)}
      </section>
    </main>
  );
};

export default Category;
