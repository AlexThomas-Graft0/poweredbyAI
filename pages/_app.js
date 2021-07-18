import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-indigo-800">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
