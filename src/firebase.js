import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGuKHSNMMyO7yUBNlfFJBjO2pbzls4kGc",
    authDomain: "twitter-clone-11143.firebaseapp.com",
    projectId: "twitter-clone-11143",
    storageBucket: "twitter-clone-11143.appspot.com",
    messagingSenderId: "766316119222",
    appId: "1:766316119222:web:a62741bd03987f671e9217",
    measurementId: "G-DSPYZ36069"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;