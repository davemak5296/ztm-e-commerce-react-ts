import { MouseEventHandler, useContext } from "react";

import { ReactComponent as MinusSign } from "../assets/circle-minus-solid.svg";
import { ReactComponent as PlusSign } from "../assets/circle-plus-solid.svg";
import { ReactComponent as CrossSign } from "../assets/circle-xmark-solid.svg";

import { CartContext } from "../contexts/cart.context";
import { cartItemType } from "../types";

const CartItem = (props: cartItemType) => {
  const { item } = props;
  const { name, imageUrl, price, qty } = item;

  const { addQty, deductQty, removeItemInCart } = useContext(CartContext);

  const addOne: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    addQty(item);
  };

  const deductOne: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    deductQty(item);
  };

  const removeItem: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    removeItemInCart(item);
  };
  return (
    <section className="flex w-full border-b border-solid border-zinc-400 py-5">
      <div className="w-[24%] pr-4">
        <img className="flex w-full items-center" src={imageUrl} alt={name} />
      </div>
      <div className="flex w-[17%] items-center justify-between">{name}</div>
      <div className="flex w-[17%] items-center">
        <MinusSign onClick={deductOne} className="h-5 w-5 cursor-pointer" />
        <div>&nbsp;&nbsp;{qty}&nbsp;&nbsp;</div>
        <PlusSign onClick={addOne} className="h-5 w-5 cursor-pointer" />
      </div>
      <div className="flex w-[17%] items-center">{price}</div>
      <div className="flex w-[17%] items-center">{`${qty * price}`}</div>
      <div className="flex w-[8%] items-center">
        <CrossSign onClick={removeItem} className="h-6 w-6 cursor-pointer" />
      </div>
    </section>
  );
};

export default CartItem;
