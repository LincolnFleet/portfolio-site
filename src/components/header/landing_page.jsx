import React from "react";
import "./landing_page.css";
const { MY_NAME } = require("../../constants.js");

import { useScrollPosition } from "../../hooks/useScrollPosition.js";

function LandingPage(props) {
  return (
    <div className="landing-page">
      <div className="landing-portrait"></div>
      <div className="landing-name">
        <div className="first">{MY_NAME[0]}</div>
        <div className="last">{MY_NAME[1]}</div>
      </div>
      <div className="landing-foot">
        <span className="byline">Software Engineer, Full Stack Web Dev</span>
      </div>
    </div>
  );
}

module.exports = LandingPage;
