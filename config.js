import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA006LIRNHeu6uPUlgB_55b0kcrMWGulYk",
  authDomain: "tinderpuce.firebaseapp.com",
  projectId: "tinderpuce",
  storageBucket: "tinderpuce.appspot.com",
  messagingSenderId: "993407223855",
  appId: "1:993407223855:web:baa91b6ba236714c9a9eda",
  measurementId: "G-9KMXQ9SP9V",
};

// inicializar firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);