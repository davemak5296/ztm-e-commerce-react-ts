import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategoriesMap } from '../store/category/categories.action';
import { categoriesActionKind } from '../types';
import { getCategoriesAndDocs } from '../utils/firebase/firebase.utils';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const newCatMap = await getCategoriesAndDocs();
      console.log(newCatMap);
      dispatch(setCategoriesMap(categoriesActionKind.SET_CATEGORIES_MAP, newCatMap));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
