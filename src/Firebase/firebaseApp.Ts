// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIqfmX7UZmQY8SunUzKzdlTE31_gInp2k",
  authDomain: "pljournal.firebaseapp.com",
  projectId: "pljournal",
  storageBucket: "pljournal.appspot.com",
  messagingSenderId: "750544101510",
  appId: "1:750544101510:web:b7332d460e9136a0343107",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
