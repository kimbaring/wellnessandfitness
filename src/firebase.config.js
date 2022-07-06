import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQqWfhnITENLWmVFWIYJzeTHfT2WDp-4U",
    authDomain: "wellnessfitnessapp.firebaseapp.com",
    databaseURL: "https://wellnessfitnessapp-default-rtdb.firebaseio.com",
    projectId: "wellnessfitnessapp",
    storageBucket: "wellnessfitnessapp.appspot.com",
    messagingSenderId: "609925288780",
    appId: "1:609925288780:web:954a856f677433e08db5e9",
    measurementId: "G-K9PVFHTH7W"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default app;
