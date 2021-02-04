import firebase from  'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2dn0kA6DD0AZeFZjfxasYnXGlPtbQFKQ",
  authDomain: "quora-clone-8277c.firebaseapp.com",
  projectId: "quora-clone-8277c",
  storageBucket: "quora-clone-8277c.appspot.com",
  messagingSenderId: "964701171906",
  appId: "1:964701171906:web:169cdf22973f7000458b5b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export default db;