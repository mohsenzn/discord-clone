import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAgj6zpPNewKcamfQcBi4q8zRirKYRYJvw",
  authDomain: "discord-clone-9e22e.firebaseapp.com",
  projectId: "discord-clone-9e22e",
  storageBucket: "discord-clone-9e22e.appspot.com",
  messagingSenderId: "744061788644",
  appId: "1:744061788644:web:07cb8e2308fa94fdf9e7f1",
  measurementId: "G-739QWPDFF1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();

const auth  = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;