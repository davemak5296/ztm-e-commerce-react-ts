import { FirebaseError } from "firebase/app";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import {
  createAuthUserWithEmailAndPw,
  createUserDocFromAuth,
} from "../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "./button.component";
import { UserCredential } from "firebase/auth";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const handler = async () => {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("Passwords unmatch!");
        resetFormFields();
        return;
      }

      try {
        const res = (await createAuthUserWithEmailAndPw(email, password)) as UserCredential;
        await createUserDocFromAuth(res.user, { displayName });
        resetFormFields();
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
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

export default signUpForm;
