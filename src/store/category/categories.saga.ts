import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAIL,
} from './categories.reducer';
import { getCategoriesAndDocs } from '../../utils/firebase/firebase.utils';
import { AppDispatch } from '../../types';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';

export function* fetchCategories(): Generator<unknown, any, unknown> {
  yield put({ type: 'categories/FETCH_CATEGORIES_START' });

  try {
    const categoriesArray = yield call(getCategoriesAndDocs);
    yield put({ type: 'categories/FETCH_CATEGORIES_SUCCESS', payload: categoriesArray });
  } catch (error) {
    yield put({ type: 'categories/FETCH_CATEGORIES_FAIL', payload: error });
  }
}
export function* onFetchCategories(): Generator<unknown, any, unknown> {
  yield takeLatest('categories/SET_CATEGORIES', fetchCategories);
}
// export const fetchCategoriesAsync = () => async (dispatch: AppDispatch) => {
//   dispatch(FETCH_CATEGORIES_START());

//   try {
//     const categoriesArray = await getCategoriesAndDocs();
//     dispatch(FETCH_CATEGORIES_SUCCESS(categoriesArray));
//   } catch (error) {
//     dispatch(FETCH_CATEGORIES_FAIL(error));
//   }
// };

export function* categoriesSaga(): Generator<unknown, any, unknown> {
  yield all([call(onFetchCategories)]);
}
