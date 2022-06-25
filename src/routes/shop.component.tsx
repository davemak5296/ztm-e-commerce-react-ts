import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCategoriesAndDocs } from '../utils/firebase/firebase.utils';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

import { SET_CATEGORIES } from '../store/category/categories.reducer';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const newCategories = await getCategoriesAndDocs();
      console.log(newCategories);
      dispatch(SET_CATEGORIES(newCategories));
    };

    getCategories();
  }, []);

  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
