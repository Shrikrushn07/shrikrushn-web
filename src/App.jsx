import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { NotFound } from "./pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;