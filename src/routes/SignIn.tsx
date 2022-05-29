import { signInWithGooglePopup, createUserDocFromAuth } from "../utils/firebase/firebase.utils";
import "../main.css";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
    // console.log(response);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
