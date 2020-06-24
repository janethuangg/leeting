import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeYOmxcAFose8jUR9zSogEd5X-GNnC-5E",
    authDomain: "leeting-2fbcb.firebaseapp.com",
    databaseURL: "https://leeting-2fbcb.firebaseio.com",
    projectId: "leeting-2fbcb",
    storageBucket: "leeting-2fbcb.appspot.com",
    messagingSenderId: "383741236210",
    appId: "1:383741236210:web:e173e3aa33d7452623d16b"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;
