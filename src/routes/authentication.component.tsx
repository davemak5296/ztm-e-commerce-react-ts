import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from '../components/SignInForm/sign-in-form.component';
import SignUpForm from '../components/SignUpForm/sign-up-form.component';
import '../main.css';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { createUserDocFromAuth, signInWithGooglePopup } from '../utils/firebase/firebase.utils';

const authentication = () => {
  // const { closeCart } = useContext(CartContext);
  const dispatch = useDispatch();

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    dispatch(SET_IS_CART_OPEN(false));
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <main onClick={closeCart} className="mx-auto my-8 flex w-[850px] justify-between">
      <SignInForm />
      <SignUpForm />
    </main>
  );
};

export default authentication;
