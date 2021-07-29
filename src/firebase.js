import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAZBrBdcIfa9NBANjIs7QDZHHczs1zJmQs",
//     authDomain: "notes-e203c.firebaseapp.com",
//     projectId: "notes-e203c",
//     storageBucket: "notes-e203c.appspot.com",
//     messagingSenderId: "905889611505",
//     appId: "1:905889611505:web:2b5982e6f2dc584b39f350"
// };

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, timestamp };
