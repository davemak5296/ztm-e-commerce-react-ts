import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import categoriesReducer from './category/categories.reducer';
import cartReducer from './cart/cart.reducer';
import { fetchCategoriesAsync } from './category/categories.action';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
  },
  middleware: process.env.NODE_ENV !== 'production' ? [sagaMiddleware, logger] : [sagaMiddleware],
  // ? (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, logger)
  // : undefined,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(fetchCategoriesAsync);
