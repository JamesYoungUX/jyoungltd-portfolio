// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAn7ux1VNi434fQBYwjQh5QJ2e_K-mpMcE",
  authDomain: "casestudys-9f4d0.firebaseapp.com",
  projectId: "casestudys-9f4d0",
  storageBucket: "casestudys-9f4d0.firebasestorage.app",
  messagingSenderId: "1038536491409",
  appId: "1:1038536491409:web:57dc01d9149137072eda30",
  measurementId: "G-NZLEP5X0TK"
};

const app = initializeApp(firebaseConfig);
export default app; 