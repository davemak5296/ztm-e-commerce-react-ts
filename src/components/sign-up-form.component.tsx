import { ChangeEventHandler, FormEventHandler, useState } from "react";
import {
  createAuthUserWithEmailAndPw,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "./button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const [isErr, setIsErr] = useState(false);
  const errMsg = <div>Passwords unmatched!</div>;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setIsErr(true);
      }

      try {
        const res = await createAuthUserWithEmailAndPw(email, password);
        if (res !== undefined) {
          await createUserDocFromAuth(res.user, { displayName });
        }
        resetFormFields();
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.message.includes("auth/email-already-in-use")) {
            alert("Cannot sign up, email already in use.");
          }
        }
      }
    };

    handler().catch(Error);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {isErr ? errMsg : null}
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
        <Button type="submit" buttonType="google">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default signUpForm;
