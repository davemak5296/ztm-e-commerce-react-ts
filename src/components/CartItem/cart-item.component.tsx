import { MouseEventHandler, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemFromCart, clearItemInCart, addItemToCart } from '../../store/cart/cart.action';
import { ReactComponent as MinusSign } from '../../assets/circle-minus-solid.svg';
import { ReactComponent as PlusSign } from '../../assets/circle-plus-solid.svg';
import { ReactComponent as CrossSign } from '../../assets/circle-xmark-solid.svg';

import { CartContext } from '../../contexts/cart.context';
import { cartItemProps } from '../../types';

const CartItem = (props: cartItemProps) => {
  const { item } = props;
  const { name, imageUrl, price, qty } = item;
  const dispatch = useDispatch();
  const itemsInCart = useSelector(selectCartItems);

  // const { addQty, deductQty, removeItemInCart } = useContext(CartContext);

  const addOne: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(itemsInCart, item));
    // dispatch(addQty(itemsInCart, item));
  };

  const deductOne: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(removeItemFromCart(itemsInCart, item));
    // dispatch(deductQty(itemsInCart, item));
  };

  const removeItem: MouseEventHandler<HTMLOrSVGElement> = (e) => {
    e.stopPropagation();
    dispatch(clearItemInCart(itemsInCart, item));
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
