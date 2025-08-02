import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChnoc92SPG8k7QU2-Ml6nq1Zh0hVJ0v54",
  authDomain: "cloth-in-9a65b.firebaseapp.com",
  projectId: "cloth-in-9a65b",
  storageBucket: "cloth-in-9a65b.firebasestorage.app",
  messagingSenderId: "1019492049419",
  appId: "1:1019492049419:web:7280d1bcb8959f29421d0e",
  measurementId: "G-FG8JW4CEZG"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app); 
const analytics = getAnalytics(app);
