// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAZiKozT93aGxKAZ2tTa53oMH5wd3eoPQ",
  authDomain: "nourish-net-9ac72.firebaseapp.com",
  projectId: "nourish-net-9ac72",
  storageBucket: "nourish-net-9ac72.appspot.com",
  messagingSenderId: "628907526421",
  appId: "1:628907526421:web:3d58cb92ab5630f138c11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;