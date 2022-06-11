import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB5LTstpKvLwjckJhBDJ83RSYP3jUupZyw",
    authDomain: "ch9auth.firebaseapp.com",
    projectId: "ch9auth",
    storageBucket: "ch9auth.appspot.com",
    messagingSenderId: "603093064169",
    appId: "1:603093064169:web:2634f1e9a1b16e68845378",
    measurementId: "G-5X8RCY4V1D"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export default firebaseApp;