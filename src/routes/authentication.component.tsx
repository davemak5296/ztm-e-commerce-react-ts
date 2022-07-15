import * as React from 'react';
import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import SignInForm from '../components/SignInForm/sign-in-form.component';
import SignUpForm from '../components/SignUpForm/sign-up-form.component';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { selectIsCartOpen } from '../store/cart/cart.selector';

const Authentication: React.FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      onClick={closeCart}
      className="mx-auto my-8 flex w-[850px] justify-between"
    >
      <SignInForm />
      <SignUpForm />
    </motion.main>
  );
};

export default React.memo(Authentication);
