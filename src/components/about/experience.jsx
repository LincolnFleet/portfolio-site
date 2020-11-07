import React from "react";
import DividerSingle from "./divider_single.jsx";

import { JOBS } from "./about_data.js";

export default function Experience(props) {
  const jobElems = JOBS.map((job) => {
    return (
      <div className="item">
        <div className="left">
          <div className="employer">{job.employer}</div>
          <div className="location">{job.location}</div>
        </div>
        <DividerSingle />
        <div className="right">
          <div className="title">{job.title}</div>
          <span className="dates">
            {job.startDate}-{job.endDate}
          </span>
        </div>
        {/* <div className='job description'>{job.description}</div> */}
      </div>
    );
  });

  return <div className="experience">{jobElems}</div>;
}
