import DocumentMeta from "react-document-meta";
import { useState } from "react";

function Careers() {
  const [meta, setMeta] = useState({
    title: "Careers",
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
    <div className="Careers">
      <DocumentMeta {...meta}>
        <h1>Careers</h1>
      </DocumentMeta>
    </div>
  );
}

export default Careers;
