import DocumentMeta from "react-document-meta";
import { useState } from "react";

function NewsDetails() {
  const [meta, setMeta] = useState({
    title: "NewsDetails",
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
    <div className="NewsDetails">
      <DocumentMeta {...meta}>
        <h1>News Details</h1>
      </DocumentMeta>
    </div>
  );
}

export default NewsDetails;
