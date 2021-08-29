import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

import Tools from "../components/Tools";
export default function Submit() {
  const { user } = Auth.useUser();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    tool: "",
    url: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        tool: "",
        url: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const submission = fetch("https://formspree.io/f/xvodbvde", {
        method: "POST",
        body: JSON.stringify(inputs),
      });

      handleServerResponse(true, "Thank you, your request has been submitted.");
    } catch (error) {
      handleServerResponse(false, error.response.data.error);
    }
  };

  return (
    <div className="p-2 bg-indigo-800">
      <div className="flex flex-col pb-5 font-sans bg-white rounded-lg shadow-lg">
        <div className="container px-2 mx-auto">
          <Header />
          <main className="flex flex-col-reverse items-center py-10 sm:flex-row jusitfy-between">
            <section className="w-full text-gray-600 body-font">
              <div className="container flex flex-col items-center justify-center px-5 mx-auto">
                <img
                  className="object-cover object-center h-64 rounded w-100"
                  alt="hero"
                  src="/aiteam1.svg"
                />
                <div className="flex flex-col items-center w-full text-center mb-7 md:w-2/3">
                  <h1 className="mb-4 text-3xl font-medium text-gray-700 title-font sm:text-4xl">
                    Want to Contribute?
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    If you have a tool that you think would be useful to others,
                    I would love for you to contribute. I am looking to build a
                    large collection of next-generation tools powered by
                    artificial intelligence &nbsp; machine learning to save
                    time.
                  </p>
                  {!user ? (
                    <div className="flex items-center justify-center w-full h-full p-4">
                      <Auth
                        supabaseClient={supabase}
                        providers={["github"]}
                        socialLayout="horizontal"
                        socialButtonSize="xlarge"
                        socialColors={{
                          facebook: "#3b5998",
                          google: "#ea4335",
                          github: "#333",
                        }}
                        onLogin={(user) => {
                          console.log(user);
                        }}
                        signup={false}
                      />
                    </div>
                  ) : (
                    <div>
                      <div
                        className="flex flex-col items-center justify-center w-full h-full p-4"
                        style={{ minWidth: 250, maxWidth: 600, margin: "auto" }}
                      >
                        <Tools user={supabase.auth.user()} />
                        <button
                          className="w-full mt-12 btn-black"
                          onClick={async () => {
                            const { error } = await supabase.auth.signOut();
                            if (error)
                              console.log("Error logging out:", error.message);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                      <form onSubmit={handleOnSubmit}>
                        <div className="flex items-end justify-center w-full">
                          <div className="flex flex-col items-center justify-between space-x-1 space-y-4 text-left">
                            <label
                              htmlFor="tool"
                              className="text-sm leading-7 text-gray-600"
                            >
                              Tool
                              <input
                                type="text"
                                id="tool"
                                name="tool"
                                onChange={handleOnChange}
                                value={inputs.tool}
                                required
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 border border-gray-700 rounded outline-none bg-opacity-40 focus:ring-2 focus:ring-indigo-300 focus:bg-transparent focus:border-indigo-500"
                              />
                            </label>
                            <label
                              htmlFor="url"
                              className="text-sm leading-7 text-gray-600"
                            >
                              Url
                              <input
                                type="url"
                                id="url"
                                name="url"
                                onChange={handleOnChange}
                                value={inputs.url}
                                required
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-200 border border-gray-700 rounded outline-none bg-opacity-40 focus:ring-2 focus:ring-indigo-300 focus:bg-transparent focus:border-indigo-500"
                              />
                            </label>
                            <button
                              type="submit"
                              disabled={status.submitting}
                              className="inline-flex px-6 py-2 my-6 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                            >
                              {!status.submitting
                                ? !status.submitted
                                  ? "Contribute"
                                  : "Contributed"
                                : "Contributing..."}
                            </button>
                          </div>
                        </div>
                      </form>
                      {status.info.error && (
                        <div className="w-full mt-2 mb-8 text-sm text-red-500 error">
                          Error: {status.info.msg}
                        </div>
                      )}
                      <div className="w-full mt-2 mb-8 text-sm">
                        {!status.info.error && status.info.msg && (
                          <>
                            <p className="text-green-500">{status.info.msg}</p>
                            <p className="text-gray-500">
                              Thank you for contributing.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
