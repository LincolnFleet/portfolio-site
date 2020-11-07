import React from "react";
import { TAGS } from "../../constants.js";

export default function Skills(props) {
  return (
    <div className="skills">
      {Object.values(TAGS).map((skill) => {
        return <span className="item">{skill}</span>;
      })}
    </div>
  );
}
