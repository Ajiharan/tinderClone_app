import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCyIFinNUjkCTxKuVelVYjsK5vLiydekII",
    authDomain: "tinder-clone-app-c8b4e.firebaseapp.com",
    databaseURL: "https://tinder-clone-app-c8b4e.firebaseio.com",
    projectId: "tinder-clone-app-c8b4e",
    storageBucket: "tinder-clone-app-c8b4e.appspot.com",
    messagingSenderId: "861705817118",
    appId: "1:861705817118:web:e7ea2e686fd5262ca3f20f",
    measurementId: "G-E244J96P6B"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export {db};