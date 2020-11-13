import React from "react";
import DividerSingle from "./divider_single.jsx";

import { EDUCATION } from "./about_data.js";

function Education(props) {
  const eduElems = EDUCATION.map((edu) => {
    return (
      <div className="item">
        <div className="left">
          <div className="title">{edu.school}</div>
          <div className="dates">{edu.dates}</div>
        </div>
        <DividerSingle />
        <div className="right">
          <div className="course">{edu.course}</div>
        </div>
      </div>
    );
  });

  return <div className="education">{eduElems}</div>;
}

module.exports = Education;
