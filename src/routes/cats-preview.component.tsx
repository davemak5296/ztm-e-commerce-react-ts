import * as React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectCategoriesMap } from '../store/category/categories.selector';
import CatPreview from '../components/CategoryPreview/cat-preview.component';

const CatsPreview: React.FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="w-full"
    >
      {Object.keys(categoriesMap).map((cat, i) => (
        <CatPreview key={i} cat={cat} products={categoriesMap[cat]} />
      ))}
    </motion.main>
  );
};
export default React.memo(CatsPreview);
