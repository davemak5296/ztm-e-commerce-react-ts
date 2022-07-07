import * as React from 'react';
import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../components/SignInForm/sign-in-form.component';
import SignUpForm from '../components/SignUpForm/sign-up-form.component';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { selectIsCartOpen } from '../store/cart/cart.selector';

const authentication: React.FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };

  return (
    <main onClick={closeCart} className="mx-auto my-8 flex w-[850px] justify-between">
      <SignInForm />
      <SignUpForm />
    </main>
  );
};

export default authentication;
