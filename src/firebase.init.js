// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa4-xbwGwtm_wf_1QFZPqPFNiI48yX5BA",
  authDomain: "manufacturer-website-d0781.firebaseapp.com",
  projectId: "manufacturer-website-d0781",
  storageBucket: "manufacturer-website-d0781.appspot.com",
  messagingSenderId: "511710385702",
  appId: "1:511710385702:web:fadb338c1e51cc0b84b8e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;