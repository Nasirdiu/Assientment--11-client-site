import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9dKviU4RcmJ_SvsXApJRCGn8639xaOgg",
  authDomain: "electronics-warehouse-56938.firebaseapp.com",
  projectId: "electronics-warehouse-56938",
  storageBucket: "electronics-warehouse-56938.appspot.com",
  messagingSenderId: "445435644840",
  appId: "1:445435644840:web:ec3d49b97b9451be04ab9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
