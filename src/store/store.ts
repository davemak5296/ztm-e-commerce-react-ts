import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import categoriesReducer from './category/categories.reducer';
import cartReducer from './cart/cart.reducer';
import { fetchCategoriesAsync } from './category/categories.action';
import userReducer from './user/user.reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware:
    process.env.NODE_ENV !== 'production'
      ? (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: ['user/SET_USER'],
              ignoredPaths: ['user.currentUser'],
            },
          }).concat(sagaMiddleware, logger)
      : undefined,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(fetchCategoriesAsync);
