
//import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD3FWVhQrpMx0bJgeTsbkledJ3bpdtifkU",
  authDomain: "storage-961bb.firebaseapp.com",
  projectId: "storage-961bb",
  storageBucket: "storage-961bb.appspot.com",
  messagingSenderId: "1016754358250",
  appId: "1:1016754358250:web:5e2bfa56c655f873449493"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();