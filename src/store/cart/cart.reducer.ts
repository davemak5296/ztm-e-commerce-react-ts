import { createSlice } from '@reduxjs/toolkit';
import { grandStateType, cartItemType } from '../../types';

export const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    isCartOpen: false,
    itemsInCart: [] as cartItemType[],
  } as grandStateType['cart'],

  reducers: {
    SET_IS_CART_OPEN: (state: grandStateType['cart'], action) => {
      state.isCartOpen = action.payload;
    },
    SET_CART_ITEMS: (state: grandStateType['cart'], action) => {
      state.itemsInCart = action.payload;
    },
  },
});

export const { SET_IS_CART_OPEN, SET_CART_ITEMS } = cartSlice.actions;
export default cartSlice.reducer;
