import { User } from 'firebase/auth';
import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createAuthUserWithEmailAndPw,
  createUserDocFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPw,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase/firebase.utils';

export function* getSnapShotFromUserAuth(
  userAuth: User,
  additionalInfo: object = {}
): Generator<any, any, any> {
  try {
    const userSnapShot = yield call(createUserDocFromAuth, userAuth, additionalInfo);
    yield put({ type: 'user/SIGN_IN_SUCCESS', payload: userAuth });
  } catch (error) {
    yield put({ type: 'user/SIGN_IN_FAILED', payload: { id: 3, error } });
  }
}

export function* isUserAuthenticated(): Generator<any, any, any> {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapShotFromUserAuth, userAuth, {});
  } catch (error) {
    yield put({ type: 'user/SIGN_IN_FAILED', payload: { id: 2, error } });
  }
}

export function* signUp(action: AnyAction): Generator<any, any, any> {
  const { payload } = action;
  const { email, password, displayName } = payload;
  const additionalInfo = { displayName };

  try {
    const { user } = yield call(createAuthUserWithEmailAndPw, email, password);
    yield put({ type: 'user/SIGN_UP_SUCCESS', payload: { user, additionalInfo } });
  } catch (error) {
    yield put({ type: 'user/SIGN_UP_FAILED', payload: error });
  }
}
export function* signInAfterSignUp(action: AnyAction): Generator<any, any, any> {
  const { payload } = action;
  const { user, additionalInfo } = payload;
  yield call(getSnapShotFromUserAuth, user, additionalInfo);
}
export function* signInWithEmail(action: AnyAction): Generator<any, any, any> {
  const { payload } = action;
  const { email, password } = payload;

  try {
    const { user } = yield call(signInAuthUserWithEmailAndPw, email, password);
    if (!user) {
      console.log('no user found');
      return;
    }
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put({ type: 'user/SIGN_IN_FAILED', payload: { id: 1, error } });
  }
}
export function* signInWithGoogle(): Generator<any, any, any> {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put({ type: 'user/SIGN_IN_FAILED', payload: error });
  }
}
export function* signOut(): Generator<any, any, any> {
  try {
    yield call(signOutUser);
    yield put({ type: 'user/SIGN_OUT_SUCCESS' });
  } catch (error) {
    yield put({ type: 'user/SIGN_OUT_FAILED', payload: error });
  }
}
export function* onCheckUserSession(): Generator<unknown, any, unknown> {
  yield takeLatest('user/CHECK_USER_SESSION', isUserAuthenticated);
}
export function* onSignUpStart(): Generator<unknown, any, unknown> {
  yield takeLatest('user/SIGN_UP_START', signUp);
}
export function* onSignUpSucess(): Generator<unknown, any, unknown> {
  yield takeLatest('user/SIGN_UP_SUCCESS', signInAfterSignUp);
}
export function* onEmailSignInStart(): Generator<unknown, any, unknown> {
  yield takeLatest('user/EMAIL_SIGN_IN_START', signInWithEmail);
}
export function* onGoogleSignInStart(): Generator<unknown, any, unknown> {
  yield takeLatest('user/GOOGLE_SIGN_IN_START', signInWithGoogle);
}
export function* onSignOutStart(): Generator<any, any, any> {
  yield takeLatest('user/SIGN_OUT_START', signOut);
}
export function* userSaga(): Generator<unknown, any, unknown> {
  yield all([
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignUpSucess),
    call(onEmailSignInStart),
    call(onGoogleSignInStart),
    call(onSignOutStart),
  ]);
}
