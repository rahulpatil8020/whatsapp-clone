// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA7ZILBfDZ7ehb3eTxWQ2GhUFU1Gttb0JM',
  authDomain: 'whatsapp-clone-3dce5.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-3dce5.firebaseio.com',
  projectId: 'whatsapp-clone-3dce5',
  storageBucket: 'whatsapp-clone-3dce5.appspot.com',
  messagingSenderId: '536934541139',
  appId: '1:536934541139:web:8ab0107fec37721244e3a6',
  measurementId: 'G-EPN88J9RW9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
