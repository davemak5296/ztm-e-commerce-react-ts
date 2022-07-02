import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import categoriesReducer from './category/categories.reducer';
import cartReducer from './cart/cart.reducer';
import { onFetchCategories } from './category/categories.saga';
import rootSaga from './root-saga';
import userReducer from './user/user.reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const myMiddleware = [
  sagaMiddleware,
  process.env.NODE_ENV !== 'production' && logger,
] as typeof middlewares;
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/SIGN_IN_FAILED', 'user/SIGN_IN_SUCCESS', 'user/SIGN_UP_SUCCESS'],
        ignoredPaths: ['user.currentUser', 'user.error'],
      },
    }).concat(myMiddleware),
  // process.env.NODE_ENV !== 'production'
  //   ? (getDefaultMiddleware) =>
  //       getDefaultMiddleware({
  //         serializableCheck: {
  //           ignoredActions: [
  //             'user/SIGN_IN_FAILED',
  //             'user/SIGN_IN_SUCCESS',
  //             'user/SIGN_UP_SUCCESS',
  //           ],
  //           ignoredPaths: ['user.currentUser', 'user.error'],
  //         },
  //       }).concat(sagaMiddleware, logger)
  //   : undefined,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(onFetchCategories);
