import * as React from 'react';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_FAILED,
} from '../../store/user/user.reducer';
import FormInput from '../FormInput/form-input.component';
import Button from '../Button/button.component';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types';

const defaultFormFields = {
  email: '',
  password: '',
};

const signInForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = () => {
    dispatch(GOOGLE_SIGN_IN_START());
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const handler = async () => {
      event.preventDefault();

      try {
        dispatch(EMAIL_SIGN_IN_START({ email, password }));
        resetFormFields();
      } catch (error: unknown) {
        dispatch(SIGN_IN_FAILED(error));
        resetFormFields();
      }
    };

    handler().catch(Error);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex w-[380px] flex-col">
      <h2 className="my-2.5">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="flex justify-between">
          <Button type="submit" buttonType="default">
            sign in
          </Button>
          <Button clickHandler={signInWithGoogle} type="button" buttonType="google">
            sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default React.memo(signInForm);
