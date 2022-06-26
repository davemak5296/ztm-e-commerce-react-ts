import { MouseEventHandler, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { SET_IS_CART_OPEN } from '../../store/cart/cart.reducer';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import styles from './cart-icon.styles';

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, sumOfCartItems } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const sumOfCartItems = useSelector(selectCartCount);

  const toggleDropDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(SET_IS_CART_OPEN(!isCartOpen));
  };

  return (
    <div
      onClick={toggleDropDown}
      className={styles.div}
      // className="relative flex h-11 w-11 cursor-pointer items-center justify-center"
    >
      <ShoppingIcon className="h-6 w-6" />
      <span className={styles.span}>{sumOfCartItems}</span>
      {/* <span className="absolute bottom-3 text-[10px] font-bold">{sumOfCartItems}</span> */}
    </div>
  );
};

export default CartIcon;
