import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAcXEmYbJ9Iit5Axq-YzPtC14E3Wz998ho",
  authDomain: "pact-e4038.firebaseapp.com",
  databaseURL: "https://pact-e4038.firebaseio.com",
  projectId: "pact-e4038",
  storageBucket: "pact-e4038.appspot.com",
  messagingSenderId: "749874275148",
  appId: "1:749874275148:web:f1bcabe9c2bc1eccf365e9",
  measurementId: "G-BT4LKDRB7R",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
