
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADHdE-HEROiclL5rX-MDgLcz6hA95Enfk",
    authDomain: "fir-proyecto-react.firebaseapp.com",
    projectId: "fir-proyecto-react",
    storageBucket: "fir-proyecto-react.appspot.com",
    messagingSenderId: "23917779574",
    appId: "1:23917779574:web:71b1ecb520aeb9bd0bdd57"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(); 

export { app, auth };