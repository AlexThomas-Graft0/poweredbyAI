import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Tool() {
  const [tool, setTool] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const response = await fetch(
        `https://poweredby-ai.vercel.app/api/tool?id=${id}`
      );
      const data = await response.json();
      console.log({ data });
      setLoading(false);
      setTool(data);
      setCoverImage(data.image);
    } catch (error) {
      //
    }
  };
  useEffect(() => {
    const { id } = router.query;
    fetchData(id);
  }, []);

  return (
    <div>
      {!tool ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{tool.name}</h1>
          <img src={coverImage} />
          <p>{tool.description}</p>
        </div>
      )}
    </div>
  );
}
