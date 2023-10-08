// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6vYZ6KukjDreQisvClBIgeVIhAdVvnww",
  authDomain: "ecommerce-4332a.firebaseapp.com",
  projectId: "ecommerce-4332a",
  storageBucket: "ecommerce-4332a.appspot.com",
  messagingSenderId: "894872985702",
  appId: "1:894872985702:web:cebfad52b6958984c34da7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB };
export{auth};