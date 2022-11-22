import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYZt1Ce1q2RYM2IEVa8KwQfKNr-nvvwgw",
  authDomain: "crwn-clothing-db-59884.firebaseapp.com",
  projectId: "crwn-clothing-db-59884",
  storageBucket: "crwn-clothing-db-59884.appspot.com",
  messagingSenderId: "218986255166",
  appId: "1:218986255166:web:714b62fec9ba6e951dd26f",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
      });
    } catch (error) {
        console.log(`error Creating the user ${error}`)
    }
  }

  return userDocRef;
};
