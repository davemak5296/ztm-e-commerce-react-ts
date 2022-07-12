import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './category.component';
import CatsPreview from './cats-preview.component';

const Shop: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CatsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default React.memo(Shop);
