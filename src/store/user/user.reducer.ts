import { createSlice } from '@reduxjs/toolkit';
import { grandStateType } from '../../types';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    currentUser: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    SET_USER: (state: grandStateType['user'], action) => {
      state.currentUser = action.payload;
    },
    CHECK_USER_SESSION: () => {},
    SIGN_UP_START: (state: grandStateType['user'], action) => {
      state.isLoading = true;
    },
    SIGN_UP_SUCCESS: (state: grandStateType['user'], action) => {
      state.isLoading = false;
    },
    SIGN_UP_FAILED: (state: grandStateType['user'], action) => {
      state.error = action.payload;
    },
    GOOGLE_SIGN_IN_START: (state: grandStateType['user']) => {
      state.isLoading = true;
    },
    EMAIL_SIGN_IN_START: (state: grandStateType['user'], action) => {
      state.isLoading = true;
    },
    SIGN_IN_SUCCESS: (state: grandStateType['user'], action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    SIGN_IN_FAILED: (state: grandStateType['user'], action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    SIGN_OUT_START: (state: grandStateType['user']) => {
      state.isLoading = true;
    },
    SIGN_OUT_SUCCESS: (state: grandStateType['user']) => {
      state.currentUser = null;
    },
    SIGN_OUT_FAILED: (state: grandStateType['user'], action) => {
      state.error = action.payload;
    },
  },
});

export const {
  SET_USER,
  CHECK_USER_SESSION,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
} = userSlice.actions;
export default userSlice.reducer;
