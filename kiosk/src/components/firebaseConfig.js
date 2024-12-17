// src/components/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your Firebase project's settings
const firebaseConfig = {
  apiKey: "AIzaSyAYMUz-bbFJKpx20iWK7rLoLavXGNQu8nE",
  authDomain: "kiosk-survey-ddd7d.firebaseapp.com",
  projectId: "kiosk-survey-ddd7d",
  storageBucket: "kiosk-survey-ddd7d.firebasestorage.app",
  messagingSenderId: "341584289373",
  appId: "1:341584289373:web:afd9138cc97ae8e9a4b7b4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);