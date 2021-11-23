import { initializeApp } from "firebase/app";

/* Importing just what we need for DB storage... */
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


/* Auth not needed so far */
// import 'firebase/auth';

/* Our web app's Firebase configuration */
const config = {
    apiKey: "AIzaSyBP4YCwywIBOV-00dRwmCHwur8gtg02K2U",
    authDomain: "react-fifa-cards.firebaseapp.com",
    projectId: "react-fifa-cards",
    storageBucket: "react-fifa-cards.appspot.com",
    messagingSenderId: "538402527588",
    appId: "1:538402527588:web:319f4493ecccaa9a81c271"

};

/* Firebase Init */
const app = initializeApp( config );
const db = getFirestore(app);

/* Exporting to use the DB storage whenever we need it */
export default db;
