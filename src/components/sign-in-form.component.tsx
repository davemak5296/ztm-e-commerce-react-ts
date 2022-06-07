import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";
import {
  signInAuthUserWithEmailAndPw,
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import FormInput from "./form-input.component";
import Button from "./button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const signInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = () => {
    const handler = async () => {
      await signInWithGooglePopup();
    };
    handler().catch(Error);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const handler = async () => {
      event.preventDefault();

      try {
        const res = (await signInAuthUserWithEmailAndPw(email, password)) as UserCredential;

        resetFormFields();
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/wrong-password":
              alert("Wrong password.");
              break;
            case "auth/user-not-found":
              alert("User not exists.");
              break;
            default:
              console.log(error.code);
              break;
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

export default signInForm;
