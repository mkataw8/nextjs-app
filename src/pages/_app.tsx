import { type AppType } from "next/dist/shared/lib/utils";
// import { initFirebase } from "~/Firebase/firebaseapp";
import { initializeApp } from "firebase/app";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  initializeApp();

  return <Component {...pageProps} />;
};

export default MyApp;
