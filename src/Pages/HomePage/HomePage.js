import DocumentMeta from "react-document-meta";
import { useState } from "react";

function HomePage() {
  const [meta, setMeta] = useState({
    title: "Home",
    description: "I am a Home, and I can create multiple tags",
    canonical: "http://domain.com/pageURl",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  });
  console.log("meta", meta);
  return (
    <div className="Home">
      <DocumentMeta {...meta}>
        <h1>Home Page</h1>
      </DocumentMeta>
    </div>
  );
}

export default HomePage;
