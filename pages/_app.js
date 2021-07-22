import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="bg-indigo-800">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
