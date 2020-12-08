import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDzpU1eRpqckE4olw-p1UGq2LBEkd7GSbQ",
  authDomain: "e-b4f82.firebaseapp.com",
  projectId: "e-b4f82",
  storageBucket: "e-b4f82.appspot.com",
  messagingSenderId: "546607381381",
  appId: "1:546607381381:web:a9b90367e20a0b8fe8e2ec",
  measurementId: "G-9RSW0QZSL6"
});

const auth = firebase.auth()

export {auth};