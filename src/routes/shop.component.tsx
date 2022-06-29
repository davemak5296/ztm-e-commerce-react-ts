import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

// import { fetchCategoriesAsync } from '../store/category/categories.action';
import { AppDispatch } from '../types';

const Shop = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategoriesAsync());
    dispatch({ type: 'categories/SET_CATEGORIES' });
  }, []);

  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
