import React from "react";

export default function ProjectsFilter(props) {
  const { selectedTags, setSelectedTags } = props;

  const handleOptionClick = React.useCallback(
    (e) => {
      const value = e.target.value;
      selectedTags.includes(value)
        ? setSelectedTags(selectedTags.filter((tag) => tag != value))
        : setSelectedTags([...selectedTags, value]);
    },
    [selectedTags]
  );

  return <div className="projects-filter">(**filter)</div>;
}
