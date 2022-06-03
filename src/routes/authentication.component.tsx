import { signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import "../main.css";
import SignUpForm from "../components/sign-up-form.component";
import SignInForm from "../components/sign-in-form.component.";

const authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <main className="mx-auto my-8 flex w-[850px] justify-between">
      <SignInForm />
      <SignUpForm />
    </main>
  );
};

export default authentication;
