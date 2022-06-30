import { useContext, MouseEventHandler } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Crwnlogo } from '../assets/crown.svg';
import CartIcon from '../components/CartIcon/cart-icon.component';
import CartDropDown from '../components/CartDropDown/cart-dropdown.component';

import { selectIsCartOpen } from '../store/cart/cart.selector';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { UserContext } from '../contexts/user.context';
import { CartContext } from '../contexts/cart.context';

import { signOutUser } from '../utils/firebase/firebase.utils';
import { userContextType } from '../types';
import '../main.css';
import { selectCurrentUser } from '../store/user/user.selector';

const Navigation = () => {
  // const { currUser } = useContext(UserContext) as userContextType;
  // const { isCartOpen, closeCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currUser = useSelector(selectCurrentUser);

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    dispatch(SET_IS_CART_OPEN(false));
  };

  return (
    <>
      <nav onClick={closeCart} className="mb-6 flex h-[70px] w-full justify-between">
        {/* logo */}
        <Link to="/" className="h-full w-[70px] p-6">
          <Crwnlogo className="" />
        </Link>
        {/* links */}
        <div className="flex h-full w-6/12 items-center justify-end">
          <Link to="/shop" className="py-2.5 px-3.5">
            SHOP
          </Link>
          <Link to="/shop" className="py-2.5 px-3.5">
            CONTACT
          </Link>
          {currUser ? (
            <span onClick={signOutUser} className="cursor-pointer py-2.5 px-3.5">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="py-2.5 px-3.5">
              SIGN IN
            </Link>
          )}
          {/* shopping-cart icon */}
          <CartIcon />
        </div>
        {/* cart drop-down */}
        {isCartOpen ? <CartDropDown /> : null}
      </nav>
      {/* other components */}
      <Outlet />
    </>
  );
};

export default Navigation;
