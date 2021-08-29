import { useEffect } from "react";
import { useRouter } from "next/router";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

import * as ga from "../lib/ga";

import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   if (window) {
  //     const handleRouteChange = (url) => {
  //       console.log(`changing route to: ${url}`);
  //       ga.pageview(url);
  //     };
  //     router.events.on("routeChangeComplete", handleRouteChange);

  //     // If the component is unmounted, unsubscribe
  //     // from the event with the `off` method
  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange);
  //     };
  //   }
  // }, [router.events]);

  return (
    <div className="bg-indigo-800">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
