import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmLngRqsQ5XQx9MXisLjue7g2BdXVg-ww",
    authDomain: "synergy-crm-4eacd.firebaseapp.com",
    projectId: "synergy-crm-4eacd",
    storageBucket: "synergy-crm-4eacd.appspot.com",
    messagingSenderId: "205542752701",
    appId: "1:205542752701:web:3f7155e6f12fb7085e52d4",
    measurementId: "G-FW6RBWD97V"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };