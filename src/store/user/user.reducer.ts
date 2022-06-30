import { createSlice } from '@reduxjs/toolkit';
import { grandStateType } from '../../types';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    currentUser: null,
  },

  reducers: {
    SET_USER: (state: grandStateType['user'], action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { SET_USER } = userSlice.actions;
export default userSlice.reducer;
