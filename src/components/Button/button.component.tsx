import { btnProps, btnTypes } from '../../types';
import styles from './button.styles';

const btnClass: btnTypes = {
  default: styles.vanilla,
  google: styles.google,
  inverted: styles.inverted,
};

const Button = (props: btnProps) => {
  const { clickHandler, varCls, children, buttonType, ...otherProps } = props;
  return (
    <button onClick={clickHandler} className={`${varCls} ${btnClass[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
