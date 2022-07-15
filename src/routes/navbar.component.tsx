import * as React from 'react';
import { MouseEventHandler, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as Crwnlogo } from '../assets/crown.svg';
import CartDropDown from '../components/CartDropDown/cart-dropdown.component';
import CartIcon from '../components/CartIcon/cart-icon.component';
import { SET_IS_CART_OPEN } from '../store/cart/cart.reducer';
import { selectIsCartOpen } from '../store/cart/cart.selector';
import { selectCategories, selectCategoriesMap } from '../store/category/categories.selector';
import { SIGN_OUT_START } from '../store/user/user.reducer';
import { selectCurrentUser } from '../store/user/user.selector';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const currUser = useSelector(selectCurrentUser);
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  const ulRef = React.useRef<HTMLUListElement>(null);
  const ulList = ulRef.current;
  const signOutHandler: MouseEventHandler = () => {
    dispatch(SIGN_OUT_START());
  };
  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };
  const dropDownHandler: MouseEventHandler = (e) => {
    if (e.target == e.currentTarget) {
      navigate('/shop');
    }
  };

  return (
    <>
      <nav onClick={closeCart} className="mb-6 flex h-[70px] w-full justify-between">
        {/* logo */}
        <Link to="/" className="h-full w-[70px] p-6 pl-2">
          <Crwnlogo className="" />
        </Link>
        {/* links */}
        <div className="flex h-full w-6/12 items-center justify-end">
          <div className="cursor-pointer py-2.5 px-3.5">
            <div onClick={dropDownHandler} className="dropdown-hover dropdown">
              SHOP
              {categories.length !== 0 && (
                <ul
                  ref={ulRef}
                  data-theme="lofi"
                  className="dropdown-content menu rounded-box w-52 bg-base-100 p-1.5 shadow"
                >
                  {categories.map((item, index) => (
                    <li key={index}>
                      <Link className="pt-2 pb-2" to={`/shop/${item.title.toLowerCase()}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <Link to="/contact" className="py-2.5 px-3.5">
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

export default React.memo(Navigation);
