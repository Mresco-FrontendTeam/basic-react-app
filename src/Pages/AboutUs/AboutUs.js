import DocumentMeta from "react-document-meta";
import { useState } from "react";

function About() {
  const [meta, setMeta] = useState({
    title: "About",
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
    <div className="About">
      <DocumentMeta {...meta}>
        <h1>About</h1>
      </DocumentMeta>
    </div>
  );
}

export default About;
