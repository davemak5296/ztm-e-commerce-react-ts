import { MouseEventHandler, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_IS_CART_OPEN } from '../../store/cart/cart.reducer';
import { directoryProps } from '../../types';
import DirectoryItem from '../DirectoryItem/directory-item.component';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Directory = (props: directoryProps) => {
  const categories = props.categories;
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    isCartOpen ? dispatch(SET_IS_CART_OPEN(false)) : null;
  };

  return (
    <main onClick={closeCart} className="flex w-full flex-wrap justify-between">
      {categories.map((cat) => (
        <DirectoryItem key={cat.id} category={cat} />
      ))}
    </main>
  );
};

export default Directory;
