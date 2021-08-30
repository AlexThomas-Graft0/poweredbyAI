import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../lib/initSupabase";
import { Auth } from "@supabase/ui";

export default function Tool() {
  const [tool, setTool] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = Auth.useUser();

  const [coverImage, setCoverImage] = useState(null);

  async function updateCoverImage() {
    if (tool.image) {
      setCoverImage(tool.image);
    }
  }

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const seedData = async () => {
    console.log({ user });
    // const { data, error } = await supabase.from("tools").insert([]);
    // console.log({ data, error });
    await fetchData();
  };

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("tools").select();

      // const baseUrl = "https://poweredby-ai.vercel.app";
      // const response = await fetch(`${baseUrl}/api/tool?id=${id}`);
      // console.log(response);
      // const data = await response.json();
      console.log({ data });
      setLoading(false);
      setTool(data);
      // setCoverImage(data.image);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const { id } = router.query;
    fetchData(id);
  }, []);

  return (
    <div>
      {!user ? (
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
      ) : (
        <button onClick={seedData}>Seed</button>
      )}
      {tool && (
        <div>
          <h1>{tool.name}</h1>
          <img src={coverImage} />
          <p>{tool.description}</p>
        </div>
      )}
    </div>
  );
}
