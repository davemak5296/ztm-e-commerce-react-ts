import * as React from 'react';
import { MouseEventHandler, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../Button/button.component';

import styles from './cart-dropdown.styles';

const CartDropDown: React.FC = () => {
  const itemsInCart = useSelector(selectCartItems);
  const navigate = useNavigate();

  const navHandler: MouseEventHandler = () => {
    navigate('/cart');
  };

  return (
    <div className={styles.wrapperDiv}>
      <div className={styles.div}>
        {/* items */}
        {itemsInCart.map(({ id, name, imageUrl, price, qty }) => (
          <section key={id} className="mb-3.5 flex">
            <img className="w-[30%]" src={imageUrl} alt={name} />
            <div className="flex w-[70%] flex-col items-start justify-center py-2.5 px-5 text-xs">
              <span>{name}</span>
              <span>{`${qty}x\$${price}`}</span>
            </div>
          </section>
        ))}
      </div>

      <Button clickHandler={navHandler} type="button" buttonType="defaultInDropDown">
        GO TO CHECKOUT
      </Button>
      {/* <Link to="cart">GO TO CHECKOUT</Link> */}
    </div>
  );
};

export default CartDropDown;
