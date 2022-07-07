import { createSelector } from '@reduxjs/toolkit';
import { CategoriesMap, BaseState } from '../../types';

const selectCategoriesReducer = (grandState: BaseState) => grandState.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);
export const selectCategoriesMap = createSelector([selectCategories], (categoriesArray) =>
  categoriesArray.reduce<CategoriesMap>((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
