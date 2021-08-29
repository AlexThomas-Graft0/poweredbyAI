import { useState } from "react";
import Link from "next/link";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const { user } = Auth.useUser();

  return (
    <header className="relative flex flex-col items-center justify-between py-6 sm:flex-row">
      <h3 className="text-2xl font-bold text-blue-900 uppercase justify-self-start">
        <a href="/">Powered By AI</a>
      </h3>
      <nav
        className={`${
          show ? "flex-col sm:flex-row" : "hidden"
        } bg-white flex text-lg sm:flex text-center`}
      >
        <a href="/" className="px-6 py-3 text-gray-800 hover:text-indigo-300">
          Home
        </a>
        <a
          href="/Tools"
          className="px-6 py-3 text-gray-800 hover:text-indigo-300"
        >
          Tools
        </a>
        <a
          href="/Submit"
          className="px-6 py-3 text-gray-800 hover:text-indigo-300"
        >
          Submit Tool
        </a>
        {user && (
          <a
            href="https://github.com/AlexThomas-Graft0/poweredbyAI"
            className="px-6 py-3 text-gray-800 hover:text-indigo-300"
          >
            Contribute
          </a>
        )}
      </nav>
      <button
        className="absolute top-0 right-0 flex flex-col p-4 mt-4 sm:hidden"
        onClick={handleToggle}
      >
        <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
        <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
        <span className="w-5 h-1 mb-1 bg-indigo-500"></span>
      </button>
    </header>
  );
}
