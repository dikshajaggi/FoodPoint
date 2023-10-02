// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGFLoIxBeW1kh_7um99VHGgaf4myRW3ic",
    authDomain: "food-ordering-45b43.firebaseapp.com",
    projectId: "food-ordering-45b43",
    storageBucket: "food-ordering-45b43.appspot.com",
    messagingSenderId: "617068388172",
    appId: "1:617068388172:web:2028ecda32d7029cf3f9e9",
    measurementId: "G-LPW32JLNV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);