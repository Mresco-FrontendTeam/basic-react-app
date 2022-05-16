import DocumentMeta from "react-document-meta";
import { useState } from "react";

function News() {
  const [meta, setMeta] = useState({
    title: "News",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://domain.com/pageURl",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  });
  return (
    <div className="News">
      <DocumentMeta {...meta}>
        <h1>News</h1>
      </DocumentMeta>
    </div>
  );
}

export default News;
