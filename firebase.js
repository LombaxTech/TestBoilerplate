import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoYRPXduQ7yhPwr0-QOqcU_O7gd0IxbeY",
  authDomain: "fb-auth-8c3f8.firebaseapp.com",
  projectId: "fb-auth-8c3f8",
  storageBucket: "fb-auth-8c3f8.appspot.com",
  messagingSenderId: "482127978471",
  appId: "1:482127978471:web:958a4f00caa02a6c456742",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
