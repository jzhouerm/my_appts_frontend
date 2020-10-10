// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBprwqJkDxBbpFakhrlRy0KMJaviDbB5Do",
    authDomain: "mod-5-project-ad950.firebaseapp.com",
    databaseURL: "https://mod-5-project-ad950.firebaseio.com",
    projectId: "mod-5-project-ad950",
    storageBucket: "mod-5-project-ad950.appspot.com",
    messagingSenderId: "28603780224",
    appId: "1:28603780224:web:e20cd06517518d33152a65",
    measurementId: "G-6S5EFR32N2"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //Allows access to database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;