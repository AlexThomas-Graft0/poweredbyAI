import { Auth } from "@supabase/ui";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/initSupabase";

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

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("tools").select();

      setLoading(false);
      setTool(data);
      if (data.image) setCoverImage(data.image);
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
