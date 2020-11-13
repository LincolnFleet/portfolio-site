import React from "react";
import { TAGS } from "../../constants.js";

function ProjectsFilter(props) {
  const { selectedTags, setSelectedTags } = props;

  const handleOptionClick = React.useCallback(
    (e) => {
      const value = e.target.value;
      selectedTags.includes(value)
        ? setSelectedTags(selectedTags.filter((tag) => tag !== value))
        : setSelectedTags([...selectedTags, value]);
    },
    [selectedTags, setSelectedTags]
  );

  return (
    <div className="projects-filter">
      {TAGS.map((tag) => (
        <div className={"filter-option"} onClick={handleOptionClick}>
          {tag}
        </div>
      ))}
    </div>
  );
}

module.exports = ProjectsFilter;
