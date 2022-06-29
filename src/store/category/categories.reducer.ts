import { createSlice } from '@reduxjs/toolkit';
import { catalogType, categoriesMapType, grandStateType } from '../../types';

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState: {
    categoriesArray: [] as catalogType[],
    isLoading: false,
    error: null,
  } as grandStateType['categories'],

  reducers: {
    SET_CATEGORIES: () => {},
    FETCH_CATEGORIES_START: (state: grandStateType['categories']) => {
      state.isLoading = true;
    },
    FETCH_CATEGORIES_SUCCESS: (state: grandStateType['categories'], action) => {
      state.isLoading = false;
      state.categoriesArray = action.payload;
    },
    FETCH_CATEGORIES_FAIL: (state: grandStateType['categories'], action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  SET_CATEGORIES,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_SUCCESS,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
