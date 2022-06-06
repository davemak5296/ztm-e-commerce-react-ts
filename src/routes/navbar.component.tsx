import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Crwnlogo } from "../assets/crown.svg";
import CartIcon from "../components/cart-icon.component";
import CartDropDown from "../components/cart-dropdown.component";

import { UserContext } from "../contexts/user.context";
import { CartContext } from "../contexts/cart.context";

import { signOutUser } from "../utils/firebase/firebase.utils";
import { userContextType, cartContextType } from "../types";
import "../main.css";

const Navigation = () => {
  const { currUser } = useContext(UserContext) as userContextType;
  const { currCart } = useContext(CartContext) as cartContextType;

  // const handleToggle: MouseEventHandler<HTMLDivElement> = () => {
  //   setCurrCart({ isDropDown: !currCart.isDropDown });
  //   // setCurrCart({ ...currCart, isDropDown: !currCart.isDropDown });
  // };

  // const a = async () => {
  //   const b = await currCart;
  //   console.log(b);
  // };

  // a();

  return (
    <>
      <nav className="mb-6 flex h-[70px] w-full justify-between">
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
            <span onClick={signOutUser} className="py-2.5 px-3.5">
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
        {currCart.isDropDown ? <CartDropDown /> : null}
      </nav>
      {/* other components */}
      <Outlet />
    </>
  );
};

export default Navigation;
