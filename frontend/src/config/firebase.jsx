import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA0D2d4Qa5piTCaOZyfwhF6fMGUbAAJr6A",
    authDomain: "proyectofinaldelexpin.firebaseapp.com",
    projectId: "proyectofinaldelexpin",
    storageBucket: "proyectofinaldelexpin.appspot.com",
    messagingSenderId: "239805229198",
    appId: "1:239805229198:web:9eaad1b1edfa2cd30601df"
};

const appFirebase = initializeApp(firebaseConfig);

export { appFirebase, getFirestore, getStorage };

