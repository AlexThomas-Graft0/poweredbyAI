import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Tools(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggle = () => setShow(!show);

  return (
    <div className="p-2 bg-indigo-800">
      <div className="flex flex-col font-sans bg-white rounded-lg shadow-lg">
        <div className="container px-8 mx-auto">
          <Header />
          <main className="flex flex-col-reverse items-center py-10 sm:flex-row jusitfy-between">
            <Hero
              image="leverageai"
              title="Leverage AI"
              subTitle="Shaving seconds from micro-interactions compounds."
            />
          </main>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}

Tools.getInitialProps = async function getInitialProps() {
  return {
    head: await import("next/head"),
  };
};
