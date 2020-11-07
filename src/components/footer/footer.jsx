import React, { useState } from "react";
import "./footer.css";
import { LINKS } from "../../constants.js";

export default function Footer(props) {
  const linkElems = Object.keys(LINKS).map((linkName) => {
    const linkData = LINKS[linkName];
    return (
      <a className="link" href={linkData.href}>
        <img className="link-icon" src={linkData.icon} />
        <img className="link-title" src={linkData.title} />
      </a>
    );
  });

  return (
    <div className="footer">
      <div className="link-container">{linkElems}</div>
    </div>
  );
}
