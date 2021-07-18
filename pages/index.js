import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="p-2 bg-indigo-800">
      <div className="flex flex-col font-sans bg-white shadow-lg sm:rounded-lg">
        <div className="container px-8 mx-auto">
          <Header />
          <main className="flex flex-col-reverse items-center py-10 sm:flex-row jusitfy-between">
            <Hero />
          </main>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <main></main>
    </div>
  );
}

Home.getInitialProps = async function getInitialProps() {
  return {
    head: await import("next/head"),
  };
};
