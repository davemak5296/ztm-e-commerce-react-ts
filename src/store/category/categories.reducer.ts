import { createSlice } from '@reduxjs/toolkit';
import { catsMapType, grandStateType } from '../../types';

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState: {
    categoriesMap: {} as catsMapType,
  } as grandStateType['categories'],

  reducers: {
    SET_CATEGORIES_MAP: (state: grandStateType['categories'], action) => {
      state.categoriesMap = action.payload;
    },
  },
});

export const { SET_CATEGORIES_MAP } = categoriesSlice.actions;
export default categoriesSlice.reducer;
