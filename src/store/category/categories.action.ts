import { categoriesAction, categoriesActionKind, catsMapType } from '../../types';

export const setCategoriesMap = (
  type: categoriesActionKind.SET_CATEGORIES_MAP,
  categoriesMap: catsMapType
): categoriesAction => ({
  type: type,
  payload: categoriesMap,
});
