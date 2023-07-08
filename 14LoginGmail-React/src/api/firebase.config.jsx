
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQbvE3qt0YDACjMNLXywUsuKBqrfL_jhM",
    authDomain: "login-e3778.firebaseapp.com",
    projectId: "login-e3778",
    storageBucket: "login-e3778.appspot.com",
    messagingSenderId: "1044440866464",
    appId: "1:1044440866464:web:51e95a7744b30d8b1733c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
