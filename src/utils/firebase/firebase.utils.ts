import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyRnzfQJHDNLD0BZM1MVftczEGWt2Y3fY",
  authDomain: "ztm-crwn-2d3cc.firebaseapp.com",
  projectId: "ztm-crwn-2d3cc",
  storageBucket: "ztm-crwn-2d3cc.appspot.com",
  messagingSenderId: "698305848091",
  appId: "1:698305848091:web:46039c776d7f9cbf1629be",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth: UserCredential["user"]) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("error creating the user", error.message);
      }
    }
  }

  return userDocRef;
};
