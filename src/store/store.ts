import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import categoriesReducer from './category/categories.reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  middleware: [logger],
});
