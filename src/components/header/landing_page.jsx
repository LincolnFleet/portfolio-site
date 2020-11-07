import React from "react";
import "./landing_page.css";

import { useScrollPosition } from "../../hooks/useScrollPosition.js";

export default function LandingPage(props) {
  return (
    <div className="landing-page">
      <div className="landing-portrait"></div>
      <div className="landing-name">
        <div className="first">Travis</div>
        <div className="last">Martin</div>
      </div>
      <div className="landing-foot">
        <span className="byline">Software Engineer, Full Stack Web Dev</span>
      </div>
    </div>
  );
}
