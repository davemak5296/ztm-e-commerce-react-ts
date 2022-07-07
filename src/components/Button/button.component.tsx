import * as React from 'react';
import { BtnProps, BtnVariants } from '../../types';
import styles from './button.styles';

const btnStyle: BtnVariants = {
  default: styles.vanilla,
  google: styles.google,
  inverted: styles.inverted,
  defaultInDropDown: styles.default_DropDown,
  invertedInProductCard: styles.inverted_ProductCard,
};

const Button: React.FC<BtnProps> = (props) => {
  const { clickHandler, children, buttonType, ...otherProps } = props;
  return (
    <button onClick={clickHandler} className={btnStyle[buttonType]} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
