import React from "react";
import projectsList from "./projects_list.js";

import ProjectAccordion from "./project_accordion.jsx";

export default function ProjectsContainer(props) {
  const { selectedTags = [] } = props;

  const projectElems = projectsList.map((proj, i) => {
    if (
      selectedTags.length < 1 ||
      !selectedTags.some((tag) => proj.tags.includes(tag))
    ) {
      continue;
    } else {
      return (
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
  });

  return <div className="projects-container">{projectElems}</div>;
}
