import * as React from 'react';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import FormInput from '../FormInput/form-input.component';
import Button from '../Button/button.component';
import { useDispatch } from 'react-redux';
import { SIGN_UP_FAILED, SIGN_UP_START } from '../../store/user/user.reducer';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const handler = async () => {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert('Passwords unmatch!');
        resetFormFields();
        return;
      }
      try {
        dispatch(SIGN_UP_START({ email, password, displayName }));
        resetFormFields();
      } catch (error: unknown) {
        dispatch(SIGN_UP_FAILED(error));
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
      <h2 className="my-2.5">Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit" buttonType="default">
          sign up
        </Button>
      </form>
    </div>
  );
};

export default React.memo(signUpForm);
