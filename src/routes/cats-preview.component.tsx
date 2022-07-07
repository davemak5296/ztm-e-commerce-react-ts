import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../store/category/categories.selector';
import CatPreview from '../components/CategoryPreview/cat-preview.component';

const CatsPreview: React.FC = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <main className="w-full">
      {Object.keys(categoriesMap).map((cat, i) => (
        <CatPreview key={i} cat={cat} products={categoriesMap[cat]} />
      ))}
    </main>
  );
};
export default CatsPreview;
