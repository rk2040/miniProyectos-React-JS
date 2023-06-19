
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiykyzQiA7KojZiAtNviof3UDB3adYakQ",
    authDomain: "fir-crud-f4638.firebaseapp.com",
    projectId: "fir-crud-f4638",
    storageBucket: "fir-crud-f4638.appspot.com",
    messagingSenderId: "481493686473",
    appId: "1:481493686473:web:8b76c10a41183eb8909518",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

