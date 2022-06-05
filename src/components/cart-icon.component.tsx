import { MouseEventHandler, useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = () => {
  const { currCart, setCurrCart } = useContext(CartContext);

  const toggleDropDown: MouseEventHandler<HTMLDivElement> = () => {
    setCurrCart({ isDropDown: !currCart.isDropDown });
  };

  return (
    <div
      onClick={toggleDropDown}
      className="relative flex h-11 w-11 cursor-pointer items-center justify-center"
    >
      <ShoppingIcon className="h-6 w-6" />
      <span className="absolute bottom-3 text-[10px] font-bold">1</span>
    </div>
  );
};

export default CartIcon;
