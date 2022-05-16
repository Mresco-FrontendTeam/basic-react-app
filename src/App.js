import "./App.css";
import DocumentMeta from "react-document-meta";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/AboutUs/AboutUs";
import HomePage from "./Pages/HomePage/HomePage";
import Projects from "./Pages/Projects/Projects";
import Navigation from "./Components/Navigation/Navigation.Component";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import News from "./Pages/News/News";
import NewsDetails from "./Pages/NewsDetails/NewsDetails";
import Careers from "./Pages/Careers/Careers";
import Contact from "./Pages/Contact/Contact";
function App() {
  const [meta, setMeta] = useState({
    title: "HomePage",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  });
  console.log("meta", meta);
  return (
    <div className="App">
      <DocumentMeta {...meta}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectid" element={<ProjectDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsid" element={<NewsDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </DocumentMeta>
    </div>
  );
}

export default App;
