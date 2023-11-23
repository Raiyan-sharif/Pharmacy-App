// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxEmE6ByCAswogKLx0wzx6jiOkHm62j2o",
  authDomain: "pharmacy-6ddf7.firebaseapp.com",
  projectId: "pharmacy-6ddf7",
  storageBucket: "pharmacy-6ddf7.appspot.com",
  messagingSenderId: "915974310077",
  appId: "1:915974310077:web:00c822d228056b0e3dcfd4",
  measurementId: "G-4FFPLXJPW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export default app;