import DocumentMeta from "react-document-meta";
import { useState } from "react";

function ProjectDetails() {
  const [meta, setMeta] = useState({
    title: "ProjectDetails",
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
    <div className="ProjectDetails">
      <DocumentMeta {...meta}>
        <h1>About</h1>
      </DocumentMeta>
    </div>
  );
}

export default ProjectDetails;
