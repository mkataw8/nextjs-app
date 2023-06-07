import { type AppType } from "next/dist/shared/lib/utils";
import { initFirebase } from "~/Firebase/firebaseapp";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  initFirebase();

  return <Component {...pageProps} />;
};

export default MyApp;
