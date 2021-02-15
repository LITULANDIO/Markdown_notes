import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAgpW1ktss3eFiwh3DEmrJEQ6BlxkEPmZo",
    authDomain: "markdown-notes-34f44.firebaseapp.com",
    projectId: "markdown-notes-34f44",
    storageBucket: "markdown-notes-34f44.appspot.com",
    messagingSenderId: "1066588126457",
    appId: "1:1066588126457:web:e19fbe0155f32c50c53628"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  export { firebase, auth }