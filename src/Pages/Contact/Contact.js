import DocumentMeta from "react-document-meta";
import { useState } from "react";

function Contact() {
  const [meta, setMeta] = useState({
    title: "Contact",
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
    <div className="Contact">
      <DocumentMeta {...meta}>
        <h1>Contact</h1>
      </DocumentMeta>
    </div>
  );
}

export default Contact;
