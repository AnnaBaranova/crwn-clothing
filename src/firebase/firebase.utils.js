import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const config = {
  apiKey: "AIzaSyC37gq3NX43wHhFNdK_hk2H-ElYF6gfdis",
  authDomain: "crwn-db-acbca.firebaseapp.com",
  projectId: "crwn-db-acbca",
  storageBucket: "crwn-db-acbca.appspot.com",
  messagingSenderId: "468165095646",
  appId: "1:468165095646:web:ceaf45944b740c1988124f",
  measurementId: "G-1QV4QG8D63",
};

const app = initializeApp(config);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = getFirestore(app).doc(`users/${userAuth.uid}`);

//   const snapshot = await userRef.get();
//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth;
//     const createAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }
//   return userRef;
// };
