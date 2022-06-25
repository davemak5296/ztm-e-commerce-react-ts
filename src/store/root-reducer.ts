import { combineReducers } from 'redux';
import categoriesReducer from './category/categories.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
});
