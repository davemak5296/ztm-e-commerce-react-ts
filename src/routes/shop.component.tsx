import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCategoriesAndDocs } from '../utils/firebase/firebase.utils';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

import { SET_CATEGORIES_MAP } from '../store/category/categories.reducer';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const newCatMap = await getCategoriesAndDocs();
      console.log(newCatMap);
      dispatch(SET_CATEGORIES_MAP(newCatMap));
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
