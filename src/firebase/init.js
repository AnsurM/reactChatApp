/* eslint-disable */
import * as firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCgBdRxyNijK1fBbYDol1ZbEQTBissY2sY",
    authDomain: "reactchatapp-f2449.firebaseapp.com",
    databaseURL: "https://reactchatapp-f2449.firebaseio.com",
    projectId: "reactchatapp-f2449",
    storageBucket: "",
    messagingSenderId: "385354794891",
    appId: "1:385354794891:web:23d85083349c4ca8"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore();

  export default firebaseApp.firestore();   
