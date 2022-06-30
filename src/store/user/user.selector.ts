import { createSelector } from '@reduxjs/toolkit';
import { grandStateType } from '../../types';

export const selectUserReducer = (grandState: grandStateType) => grandState.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser
);
