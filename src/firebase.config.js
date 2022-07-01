import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDVqmDGqBI-A8OLtUj63svfe-Do5Kxw5Zc",
    authDomain: "test-app1-43ff9.firebaseapp.com",
    databaseURL: "https://test-app1-43ff9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-app1-43ff9",
    storageBucket: "test-app1-43ff9.appspot.com",
    messagingSenderId: "164150411183",
    appId: "1:164150411183:web:c3746fd298c4cf233ff95a",
    measurementId: "G-VVYN8Y2TR6"
};
  

const fireApp = initializeApp(firebaseConfig);

export default fireApp;