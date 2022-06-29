import { createSelector } from '@reduxjs/toolkit';
import { categoriesMapType, grandStateType } from '../../types';

const selectCategoriesReducer = (grandState: grandStateType) => grandState.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);
export const selectCategoriesMap = createSelector([selectCategories], (categoriesArray) =>
  categoriesArray.reduce<categoriesMapType>((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
