import {
  categoriesStates,
  catsMapType,
  categoriesActionKind,
  categoriesAction,
  reduxStateType,
} from '../../types';

export const CATEGORIES_INITIAL_STATE: categoriesStates = {
  categoriesMap: {} as catsMapType,
};

export const categoriesReducer = (
  state: reduxStateType['categories'] = CATEGORIES_INITIAL_STATE,
  action: categoriesAction = {} as categoriesAction
) => {
  const { type, payload } = action;

  switch (type) {
    case categoriesActionKind.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
