import React from "react";
import "./app.css";

import AboutPage from "./components/about/about_page.jsx";
import BlogsPage from "./components/blogs/blogs_page.jsx";
import ProjectsPage from "./components/projects/projects_page.jsx";
import LandingPage from "./components/landing_page.jsx";
import Footer from "./components/footer.jsx";

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <LandingPage />
      </div>
      <div className="content">
        <AboutPage />
        <ProjectsPage />
        <BlogsPage />
      </div>
      <Footer />
      <div className="portal" />
    </div>
  );
}

export default App;
