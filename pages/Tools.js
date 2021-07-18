import Head from "next/head";
import Section from "../components/Section";
import { useState } from "react";

export default function Tools(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggle = () => setShow(!show);

  return (
    <div className="p-2 bg-indigo-800 ">
      <div className="flex flex-col font-sans bg-white rounded-lg shadow-lg">
        <div className="container px-8 mx-auto">
          <header className="relative flex flex-col items-center justify-between py-6 sm:flex-row">
            <h3 className="text-2xl font-bold text-blue-900 uppercase">
              Powered By AI
            </h3>
            <nav
              className={`${
                show ? "flex" : "hidden"
              } bg-white flex-col text-lg md:flex`}
            >
              <a
                href="#"
                className="px-6 py-3 text-gray-800 hover:text-indigo-300"
              >
                Home
              </a>
              <a
                href="#"
                className="px-6 py-3 text-gray-800 hover:text-indigo-300"
              >
                Tools
              </a>
              <a
                href="#"
                className="px-6 py-3 text-gray-800 hover:text-indigo-300"
              >
                About
              </a>
              <a
                href="#"
                className="px-6 py-3 text-gray-800 hover:text-indigo-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="px-6 py-3 text-gray-800 hover:text-indigo-300"
              >
                FAQ
              </a>
              <a
                href="#"
                className="px-6 py-3 text-indigo-700 uppercase bg-indigo-200 rounded-full hover:bg-indigo-300"
              >
                Sign Up
              </a>
            </nav>
            <button
              className="absolute top-0 right-0 flex flex-col p-4 mt-4 md:hidden"
              onClick={handleToggle}
            >
              <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
              <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
              <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
            </button>
          </header>
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
                href="#"
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

Tools.getInitialProps = async function getInitialProps() {
  return {
    head: await import("next/head"),
  };
};
