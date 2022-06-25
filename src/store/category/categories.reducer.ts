import { createSlice } from '@reduxjs/toolkit';
import { catalogType, catsMapType, grandStateType } from '../../types';

export const categoriesSlice = createSlice({
  name: 'categories',

  initialState: {
    categoriesArray: [] as catalogType[],
  } as grandStateType['categories'],

  reducers: {
    SET_CATEGORIES: (state: grandStateType['categories'], action) => {
      state.categoriesArray = action.payload;
    },
  },
});

export const { SET_CATEGORIES } = categoriesSlice.actions;
export default categoriesSlice.reducer;
