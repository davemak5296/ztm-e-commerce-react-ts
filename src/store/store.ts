import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import categoriesReducer from './category/categories.reducer';
import cartReducer from './cart/cart.reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
  },
  middleware: process.env.NODE_ENV !== 'production' ? [logger] : undefined,
  devTools: process.env.NODE_ENV !== 'production',
});
