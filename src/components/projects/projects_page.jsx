import React, { useState } from "react";
import "./projects.css";

import ProjectsFilter from "./projects_filter.jsx";
import ProjectsContainer from "./projects_container.jsx";

export default function ProjectsPage(props) {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="projects-page">
      <div className="projects-title">
        <div className="title">{"Projects"}</div>
      </div>
      <ProjectsFilter
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <ProjectsContainer selectedTags={selectedTags} />
    </div>
  );
}
