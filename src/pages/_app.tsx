import { initializeApp, type FirebaseApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

// Initialize Firebase with your configuration
const firebaseConfig = {
  // Add your Firebase configuration options here
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...
};

let firebaseApp: FirebaseApp;

const initializeFirebase = () => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }
};

const MyApp: AppType = ({ Component, pageProps }) => {
  initializeFirebase();

  return <Component {...pageProps} />;
};

export default MyApp;
