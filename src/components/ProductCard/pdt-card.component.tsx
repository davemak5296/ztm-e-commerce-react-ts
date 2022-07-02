import { MouseEventHandler, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { SET_IS_CART_OPEN } from '../../store/cart/cart.reducer';
import { addItemToCart } from '../../store/cart/cart.action';
import { productType } from '../../types';
import Button from '../Button/button.component';

const PdtCard = ({ product }: { product: productType }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const itemsInCart = useSelector(selectCartItems);

  const addPdtToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    dispatch(addItemToCart(itemsInCart, product));
    dispatch(SET_IS_CART_OPEN(true));
  };

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };
  return (
    <div
      onClick={closeCart}
      className="group relative flex h-[350px] w-[22vw] flex-col items-center"
    >
      <img
        className="mb-1 h-[95%] w-full object-cover group-hover:opacity-80"
        src={imageUrl}
        alt={name}
      />
      <div className="flex w-full justify-between">
        <span className="w-[90%]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <Button type="button" buttonType="invertedInProductCard" clickHandler={addPdtToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default PdtCard;
