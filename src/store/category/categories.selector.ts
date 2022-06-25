import { catsMapType, grandStateType } from '../../types';

export const selectCategoriesMap = (grandState: grandStateType) => {
  const categoriesMap = grandState.categories.categoriesArray.reduce<catsMapType>(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoriesMap;
};
