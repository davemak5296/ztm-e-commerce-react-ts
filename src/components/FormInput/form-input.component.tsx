import * as React from 'react';
import { FormInputProps } from '../../types';
import styles from './form-input.styles';

const FormInput: React.FC<FormInputProps> = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="relative my-11">
      <input {...otherProps} className={styles.input} />
      <label className={props.value.length > 0 ? styles.label_isNotEmpty : styles.label_isEmpty}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
