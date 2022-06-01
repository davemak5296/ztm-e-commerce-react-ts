import { signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import "../main.css";
import SignUpForm from "../components/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div className="flex w-[380px] flex-col">
      <h2 className="my-2.5">Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      {/* <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
