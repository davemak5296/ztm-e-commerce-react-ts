import * as React from 'react';
import { MouseEventHandler, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { SET_IS_CART_OPEN } from '../../store/cart/cart.reducer';
import { DirectoryProps } from '../../types';
import DirectoryItem from '../DirectoryItem/directory-item.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Directory: React.FC<DirectoryProps> = (props) => {
  const categories = props.categories;
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      onClick={closeCart}
      className="flex w-full flex-wrap justify-between"
    >
      {categories.map((cat) => (
        <DirectoryItem key={cat.id} category={cat} />
      ))}
    </motion.main>
  );
};

export default React.memo(Directory);
