import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA_OZlSVxrsodbIB7fMGqkfMx_qXVpF0QI",
  authDomain: "book-santa-7d561.firebaseapp.com",
  projectId: "book-santa-7d561",
  storageBucket: "book-santa-7d561.appspot.com",
  messagingSenderId: "663145418513",
  appId: "1:663145418513:web:207870cbcf7f2b9ed906b0",
  measurementId: "G-WS6CVP5Z93"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();