import { MouseEventHandler } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = ({ clickHandler }: { clickHandler: MouseEventHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="relative flex h-11 w-11 cursor-pointer items-center justify-center"
    >
      <ShoppingIcon className="h-6 w-6" />
      <span className="absolute bottom-3 text-[10px] font-bold">1</span>
    </div>
  );
};

export default CartIcon;
