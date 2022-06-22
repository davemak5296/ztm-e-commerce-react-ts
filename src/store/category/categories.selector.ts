import { reduxStateType } from '../../types';

export const selectCategoriesMap = (state: reduxStateType) => state.categories.categoriesMap;
