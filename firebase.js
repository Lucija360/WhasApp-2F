import {initializeApp, getApp, getApps} from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpAIGdUkn0zy73kNnIIxjspkOv0z-OVTs",
    authDomain: "whatsapp2-0-4477e.firebaseapp.com",
    projectId: "whatsapp2-0-4477e",
    storageBucket: "whatsapp2-0-4477e.appspot.com",
    messagingSenderId: "1072602561452",
    appId: "1:1072602561452:web:823d8eb7147a1b04eed809",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();
  
  export {auth , db, googleProvider};
