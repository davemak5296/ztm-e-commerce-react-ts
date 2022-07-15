import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { selectCategoriesMap } from '../store/category/categories.selector';
import { Product, UseParams } from '../types';
import PdtCard from '../components/ProductCard/pdt-card.component';

const Category: React.FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams<keyof UseParams>() as UseParams;
  const [products, setProducts] = useState<Product[]>(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <motion.main
      key={category}
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.4,
      }}
    >
      <h2 className="my-8 flex justify-center text-5xl">
        <span className="cursor-pointer ">
          {typeof category == 'string' ? category.toUpperCase() : null}
        </span>
      </h2>
      <section className="grid w-full grid-cols-4 gap-x-[10px] gap-y-[50px]">
        {products && products.map((product) => <PdtCard key={product.id} product={product} />)}
      </section>
    </motion.main>
  );
};

export default React.memo(Category);
