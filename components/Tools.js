import { useState, useEffect } from "react";

// import { supabase } from lib/initSupabase
import { supabase } from "../lib/initSupabase.js";

export default function Tools({ user }) {
  const [tools, setTools] = useState([]);
  //set inputs
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    url: "",
    free: false,
    freeTrial: false,
    trialLength: false,
    prices: [],
    price: "",
    paymentFrequency: "",
    company: { name: "", url: "" },
    description: "",
    parent: "",
    tags: [],
  });

  const [newToolText, setNewToolText] = useState("");
  const [errorText, setError] = useState("");

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    let { data: tools, error } = await supabase
      .from("tools")
      .select("*")
      .order("id", true);
    if (error) console.log("error", error);
    else setTools(tools);
  };
  const addTool = async (toolText) => {
    let tool = toolText.trim();
    if (tool.length) {
      let { data: tool, error } = await supabase
        .from("tools")
        .insert({ tool, user_id: user.id })
        .single();
      if (error) setError(error.message);
      else setTools([...tools, tool]);
    }
  };

  const deleteTool = async (id) => {
    try {
      await supabase.from("tools").delete().eq("id", id);
      setTools(tools.filter((x) => x.id != id));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-full p-10 border border-indigo-500 rounded">
      <h1 className="mb-12">Tools List.</h1>
      <div className="flex gap-2 my-2">
        <input
          className="w-full p-2 border border-indigo-500 rounded focus:shadow-md"
          type="text"
          placeholder="Tool name"
          value={newToolText}
          onChange={(e) => {
            setError("");
            setNewToolText(e.target.value);
          }}
        />
        <button className="btn-black" onClick={() => addTool(newToolText)}>
          Add
        </button>
      </div>
      {!!errorText && <Alert text={errorText} />}
      <div className="overflow-hidden bg-white rounded-md shadow">
        <ul>
          {tools.map((tool) => (
            <Tool
              key={tool.id}
              tool={tool}
              onDelete={() => deleteTool(tool.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const Tool = ({ tool, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(tool.is_complete);

  const toggle = async () => {
    try {
      const { data, error } = await supabase
        .from("tools")
        .update({ is_complete: !isCompleted })
        .eq("id", tool.id)
        .single();
      if (error) {
        throw new Error(error);
      }
      setIsCompleted(data.is_complete);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        toggle();
      }}
      className="block w-full transition duration-150 ease-in-out cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
    >
      <div className="flex items-center px-4 py-4 sm:px-6">
        <div className="flex items-center flex-1 min-w-0">
          <div className="text-sm font-medium leading-5 truncate">
            {tool.name}
          </div>
        </div>
        <div>
          <input
            className="cursor-pointer"
            onChange={(e) => toggle()}
            type="checkbox"
            checked={isCompleted ? true : ""}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
          className="w-4 h-4 ml-2 border-2 rounded hover:border-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

const Alert = ({ text }) => (
  <div className="p-4 my-3 bg-red-100 rounded-md">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
);
