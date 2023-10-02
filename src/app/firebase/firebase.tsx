// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_va-F9PDExgRM7CbB9AB4WPhTxwONBPM",
  authDomain: "grafx-design-studio.firebaseapp.com",
  projectId: "grafx-design-studio",
  storageBucket: "grafx-design-studio.appspot.com",
  messagingSenderId: "1050925455101",
  appId: "1:1050925455101:web:b11fa1e26ad0991bd81094",
  measurementId: "G-SKSFDT0QWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;