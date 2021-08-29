import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Tool({ tool }) {
  const [coverImage, setCoverImage] = useState(null);

  useEffect(() => {
    updateCoverImage();
  }, []);

  async function updateCoverImage() {
    if (tool.image) {
      setCoverImage(tool.image);
    }
  }

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mt-4 text-5xl font-semibold tracking-wide">{tool.name}</h1>
      {coverImage && <img src={coverImage} className="mt-4" />}
      <p className="my-4 text-sm font-light">by {tool.company.name}</p>
      <div className="mt-8">{tool.description}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const toolData = await fetch(
    "https://poweredby-ai.vercel.app/api/tools?page=1&limit=1000"
  );
  const { data } = await toolData.json();
  const paths = data.map((tool) => ({
    params: { id: tool.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const tool = await fetch(`https://poweredby-ai.vercel.app/api/tool?id=${id}`);
  const data = await tool.json();
  return {
    props: {
      tool: data,
    },
  };
}
