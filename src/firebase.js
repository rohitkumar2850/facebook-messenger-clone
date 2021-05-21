import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAagMp1NCWptUKRkZjnXDX_yNVdrxF7ihk",
  authDomain: "facebook-messenger-clone-4e3c9.firebaseapp.com",
  projectId: "facebook-messenger-clone-4e3c9",
  storageBucket: "facebook-messenger-clone-4e3c9.appspot.com",
  messagingSenderId: "851756154020",
  appId: "1:851756154020:web:4ae8aa465609c13d347a31",
  measurementId: "G-QN3J1VDNDR",
});

const db = firebaseApp.firestore();

export default db;
