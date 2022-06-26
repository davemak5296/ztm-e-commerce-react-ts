import { createSelector } from '@reduxjs/toolkit';
import { categoriesMapType, grandStateType } from '../../types';

// export const selectCategoriesMap = (grandState: grandStateType) => {
//   const categoriesMap = grandState.categories.categoriesArray.reduce<catsMapType>(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesMap;
// };

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
