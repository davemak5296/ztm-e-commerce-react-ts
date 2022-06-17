import { signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import "../main.css";
import { CartContext } from "../contexts/cart.context";
import SignUpForm from "../components/SignUpForm/sign-up-form.component";
import SignInForm from "../components/SignInForm/sign-in-form.component";
import { useContext } from "react";

const authentication = () => {
  const { closeCart } = useContext(CartContext);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <main onClick={closeCart} className="mx-auto my-8 flex w-[850px] justify-between">
      <SignInForm />
      <SignUpForm />
    </main>
  );
};

export default authentication;
