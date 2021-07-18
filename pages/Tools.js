import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Tools({ tools }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [toolsList, setToolsList] = useState(tools.data);
  const [total, setTotal] = useState(0);
  const initialPages = new Array(Math.ceil(tools.total / limit)).fill("");
  const [pages, setPages] = useState(initialPages); // on pagesize change
  console.log({ pages });
  const fetchData = async (page) => {
    setIsLoading(true);
    try {
      console.log({ page, limit });
      const response = await fetch(`/api/tools?page=${page}&limit=${limit}`);
      const data = await response.json();
      setIsLoading(false);
      setTotal(data.total);
      setLimit(data.limit); //pagesize
      setToolsList(data.data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (e, page) => {
    setPage(page);
    fetchData(page);
  };

  return (
    <div className="p-2 bg-indigo-800">
      <div className="flex flex-col font-sans bg-white rounded-lg shadow-lg">
        <div className="container px-2 mx-auto">
          <Header />
          <main className="flex flex-col-reverse items-center py-10 sm:flex-row jusitfy-between">
            <Hero
              image="leverageai"
              title="Leverage AI"
              subTitle="Shaving seconds from micro-interactions compounds."
              description="Find the perfect tool to start saving you time now."
            />
          </main>
          <section>
            {/* <h2 className="text-3xl">Product Category Page Title</h2> */}
            {/* <div className="flex flex-col mt-6 sm:flex-row sm:items-end sm:justify-between">
              <span className="text-sm font-semibold">
                {Math.ceil(page + 1 / limit)}-{Math.ceil(limit / page)} of
                {total} Tools
              </span>
              <button className="relative mt-4 text-sm focus:outline-none group sm:mt-0">
                <div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-indigo-300 rounded hover:bg-indigo-300">
                  <span className="font-medium">Popular</span>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white rounded shadow-lg group-focus:flex">
                  <a
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    href="#"
                  >
                    Popular
                  </a>
                  <a
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    href="#"
                  >
                    Featured
                  </a>
                  <a
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    href="#"
                  >
                    Newest
                  </a>
                  <a
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    href="#"
                  >
                    Lowest Price
                  </a>
                  <a
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    href="#"
                  >
                    Highest Price
                  </a>
                </div>
              </button>
            </div> */}
            <div className="grid w-full grid-cols-1 mt-6 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-12">
              {toolsList.map((tool) => (
                <Card key={tool.id} {...tool} />
              ))}
            </div>
            <div className="flex justify-center mt-10 space-x-1">
              <button
                className={`flex items-center justify-center w-8 h-8 rounded hover:bg-indigo-200 hover:text-indigo-600 ${
                  page === 1 ? "text-gray-400" : "text-gray-600"
                }`}
                onClick={() => handlePageChange(null, page - 1)}
                disabled={page === 1}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className={`flex items-center justify-center h-8 px-2 text-sm font-medium rounded ${
                  page === 1 ? "text-gray-400" : "text-gray-600"
                }`}
                disabled
                onClick={() => handlePageChange(null, page - 1)}
              >
                Prev
              </button>
              {pages.map((i, pageNumber) => (
                <button
                  className={`flex items-center justify-center w-8 h-8 rounded hover:bg-indigo-200 hover:text-indigo-600 ${
                    page === pageNumber + 1
                      ? "text-indigo-500 bg-indigo-200"
                      : "text-gray-600"
                  }`}
                  disabled={page === pageNumber + 1}
                  onClick={() => handlePageChange(null, pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              ))}

              <button
                className={`flex items-center justify-center h-8 px-2 text-sm font-medium rounded ${
                  page === total ? "text-gray-400" : "text-gray-600"
                }`}
                onClick={() => handlePageChange(null, page + 1)}
              >
                Next
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 text-gray-600 rounded hover:bg-indigo-200 hover:text-indigo-600"
                onClick={() => handlePageChange(null, page + 1)}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Tools.getInitialProps = async function getInitialProps() {
  const res = await fetch("http://localhost:3000/api/tools?page=1&limit=3");
  const json = await res.json();
  return { tools: json };
};
