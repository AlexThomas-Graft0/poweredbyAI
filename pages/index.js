import { useState } from "react";
import Head from "next/head";
import Section from "../components/Section";
import Header from "../components/Header";

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="bg-indigo-800 sm:p-2 ">
      <div className="flex flex-col font-sans bg-white shadow-lg sm:rounded-lg">
        <div className="container px-8 mx-auto">
          <Header />
          <main className="flex flex-col-reverse items-center py-10 sm:flex-row jusitfy-between">
            <div className="flex flex-col items-center text-center sm:w-2/5 sm:items-start sm:text-left">
              <h1 className="mb-2 text-6xl font-bold leading-none tracking-wide text-blue-900 uppercase">
                Build Faster
              </h1>
              <h2 className="mb-6 text-2xl tracking-widest text-orange-500 uppercase text-secondary">
                Use AI Powered tools to save time Every. Single. Day.
              </h2>
              <p className="mb-12 leading-relaxed text-gray-600">
                Here is a curated list of tools to help you in your daily work.
              </p>
              <a
                href="/Tools"
                className="px-6 py-3 text-lg font-bold text-white uppercase bg-indigo-300 rounded-full hover:bg-indigo-400"
              >
                Learn more
              </a>
            </div>
            <div className="">
              {/* <div className="w-screen h-screen mt-8 mb-16 sm:mb-0 sm:mt-0 sm:w-3/5 sm:pl-12"> */}
              <img src="/image.svg" alt="image" width="100%" height="100%" />
            </div>
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

Home.getInitialProps = async function getInitialProps() {
  return {
    head: await import("next/head"),
  };
};
