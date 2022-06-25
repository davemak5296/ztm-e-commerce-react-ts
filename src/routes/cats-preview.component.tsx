import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../store/category/categories.selector';
import CatPreview from '../components/CategoryPreview/cat-preview.component';
import '../main.css';

const CatsPreview = () => {
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
