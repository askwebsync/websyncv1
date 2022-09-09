// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuzI9FcYlbCz9CDUrPIiun2YV0AKp_Z1E",
  authDomain: "websync-8f8b4.firebaseapp.com",
  projectId: "websync-8f8b4",
  storageBucket: "websync-8f8b4.appspot.com",
  messagingSenderId: "332461800921",
  appId: "1:332461800921:web:46f707f3547d1ca4f12dc8",
  measurementId: "G-5FQEMQDME6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);