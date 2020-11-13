import React from "react";
import ProjectAccordion from "./project_accordion.jsx";

const PROJECTS_LIST = require("./projects_list.js");

function ProjectsContainer(props) {
  const { selectedTags = [] } = props;

  const projectElems = PROJECTS_LIST.reduce((acc, proj, i) => {
    if (
      selectedTags.length > 0 &&
      selectedTags.some((tag) => proj.tags.includes(tag))
    ) {
      acc.push(
        <ProjectAccordion
          key={i}
          title={proj.title}
          subtitle={proj.subtitle}
          creators={proj.creators}
          date={proj.date}
          tags={proj.tags}
          deployedLink={proj.deployedLink}
          video={proj.video}
          codeRepo={proj.codeRepo}
          description={proj.description}
        />
      );
    }

    return acc;
  }, []);

  return <div className="projects-container">{projectElems}</div>;
}

module.exports = ProjectsContainer;
