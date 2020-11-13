import React from "react";
import "./footer.css";
import { LINKS } from "../../constants.js";

function Footer(props) {
  const linkElems = Object.keys(LINKS).map((linkName) => {
    const linkData = LINKS[linkName];
    return (
      <a className="link" href={linkData.href}>
        <img
          className="link-icon"
          src={linkData.icon}
          alt={`${linkData.title} icon`}
        />
        <img className="link-title" src={linkData.title} alt={linkData.title} />
      </a>
    );
  });

  return (
    <div className="footer">
      <div className="link-container">{linkElems}</div>
    </div>
  );
}

module.exports = Footer;
