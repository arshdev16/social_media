import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG8uIMjx3Z2sQEFygJ1NdRDO9ce4zT0ZU",
  authDomain: "socialmedia-9288d.firebaseapp.com",
  projectId: "socialmedia-9288d",
  storageBucket: "socialmedia-9288d.appspot.com",
  messagingSenderId: "83006537401",
  appId: "1:83006537401:web:5f0e9e0838190a0211a568",
  measurementId: "G-KWHX01GWPK",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
