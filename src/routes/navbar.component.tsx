import { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../assets/crown.svg';
import CartDropDown from '../components/CartDropDown/cart-dropdown.component';
import CartIcon from '../components/CartIcon/cart-icon.component';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { selectIsCartOpen } from '../store/cart/cart.selector';
import { SIGN_OUT_START } from '../store/user/user.reducer';
import { selectCurrentUser } from '../store/user/user.selector';

const Navigation = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currUser = useSelector(selectCurrentUser);
  const signOutHandler: MouseEventHandler = () => {
    dispatch(SIGN_OUT_START());
  };
  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
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
            <span onClick={signOutHandler} className="cursor-pointer py-2.5 px-3.5">
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
