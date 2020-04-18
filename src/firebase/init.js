import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYGhAEMMABKWniq1cxwLBbmGpF9Gc6yHs",
  authDomain: "geo-maps-tracker.firebaseapp.com",
  databaseURL: "https://geo-maps-tracker.firebaseio.com",
  projectId: "geo-maps-tracker",
  storageBucket: "geo-maps-tracker.appspot.com",
  messagingSenderId: "280460300494",
  appId: "1:280460300494:web:40bbd8a6425bdcde85009f",
  measurementId: "G-926N306M6B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();