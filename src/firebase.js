// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbfIt1KqXQ9zuKA7ysv8_UOsh3unktv88",
  authDomain: "realtor-clone-react-4806f.firebaseapp.com",
  projectId: "realtor-clone-react-4806f",
  storageBucket: "realtor-clone-react-4806f.appspot.com",
  messagingSenderId: "382894439061",
  appId: "1:382894439061:web:54f44afc4762c392e6799c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
