import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpAIGdUkn0zy73kNnIIxjspkOv0z-OVTs",
    authDomain: "whatsapp2-0-4477e.firebaseapp.com",
    projectId: "whatsapp2-0-4477e",
    storageBucket: "whatsapp2-0-4477e.appspot.com",
    messagingSenderId: "1072602561452",
    appId: "1:1072602561452:web:823d8eb7147a1b04eed809",
  };

  const app = !firebase.app.length
   ? firebase.initialzeApp(firebaseConfig)
    : firebase.app();

    const db = apps.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export {db, auth, provider}