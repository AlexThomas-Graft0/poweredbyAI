import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <header className="relative flex flex-col items-center justify-between py-6 sm:flex-row">
      <h3 className="text-2xl font-bold text-blue-900 uppercase justify-self-start">
        Powered By AI
      </h3>
      <nav
        className={`${
          show ? "flex-col sm:flex-row" : "hidden"
        } bg-white flex text-lg sm:flex`}
      >
        <a href="#" className="px-6 py-3 text-gray-800 hover:text-indigo-300">
          Home
        </a>
        <a href="#" className="px-6 py-3 text-gray-800 hover:text-indigo-300">
          Tools
        </a>
        <a href="#" className="px-6 py-3 text-gray-800 hover:text-indigo-300">
          Contact
        </a>
        <a
          href="https://github.com/AlexThomas-Graft0/poweredbyAI"
          className="px-6 py-3 text-gray-800 hover:text-indigo-300"
        >
          k Contribute
        </a>
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