import { grandStateType } from '../../types';

export const selectCategoriesMap = (grandState: grandStateType) =>
  grandState.categories.categoriesMap;
