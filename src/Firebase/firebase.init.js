// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Firebase Initialize
const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;
