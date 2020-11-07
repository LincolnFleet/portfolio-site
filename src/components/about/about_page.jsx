import React from "react";
import "./about.css";
import zebraResume from "../assets/resume/Resume(bw).pdf";

import Skills from "./skills.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import ResumeModal from "./resume_modal.jsx";

import { useResumeModal } from "../../hooks/useResumeModal.js";

export default function AboutPage(props) {
  const { isOpen, toggleOpen } = useResumeModal();

  return (
    <div className="about-page">
      <div className="about-title">
        <div className="title">About</div>
      </div>
      <div className="about-portrait">(Stupid Face Head)</div>
      <a
        className="resume-button"
        href={zebraResume}
        target="_blank"
        rel="noopener"
      >
        Resume
      </a>
      {/* <button className='resume-button' type='button' onClick={toggleOpen}>resume modal</button> */}
      <ResumeModal isOpen={isOpen} toggleOpen={toggleOpen} />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}
