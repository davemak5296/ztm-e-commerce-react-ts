import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

import { AppDispatch } from '../types';
import { SET_CATEGORIES } from '../store/category/categories.reducer';

const Shop: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_CATEGORIES());
  }, []);

  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
