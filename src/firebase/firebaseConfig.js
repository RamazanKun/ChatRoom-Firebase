
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGtS24RymdIzLm8fpemF2zDiEA4swbisw',
  authDomain: 'hs-chat-80552.firebaseapp.com',
  projectId: 'hs-chat-80552',
  storageBucket: 'hs-chat-80552.appspot.com',
  messagingSenderId: '612648948423',
  appId: '1:612648948423:web:b1d0072bee5171036c24e2',
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);