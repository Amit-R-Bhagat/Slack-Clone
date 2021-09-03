import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsS6KEQ9OcYIE3cCv-X0_-VuThC--oHDc",
  authDomain: "slack-clone-8e42c.firebaseapp.com",
  projectId: "slack-clone-8e42c",
  storageBucket: "slack-clone-8e42c.appspot.com",
  messagingSenderId: "892395890184",
  appId: "1:892395890184:web:5bf81b3f6f0abeefb413bd",
  measurementId: "G-QZT407G4BV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
