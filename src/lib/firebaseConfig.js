// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ9QqAYRe4y8lFIzZtAzWuwFDIrqHO4KQ",
  authDomain: "tajhouse-de36e.firebaseapp.com",
  projectId: "tajhouse-de36e",
  storageBucket: "tajhouse-de36e.firebasestorage.app",
  messagingSenderId: "814858352677",
  appId: "1:814858352677:web:ee095d4a5d26dba04fe7cc",
  measurementId: "G-ZKWSY77LGC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
