import React, { useState, useRef } from "react";

export default function ProjectAccordion(props) {
  const {
    video = {},
    description = [],
    deployedLink = "",
    codeRepo = {},
    tags = [],
    creators = [],
    key,
    title = "",
    subtitle = "",
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const bodyRef = useRef(null);

  const toggleOpen = () => {
    setBodyHeight(isOpen ? 0 : bodyRef.current.scrollHeight);
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-accordion" key={key}>
      <div className="header" onClick={toggleOpen}>
        <div className="title">{title}</div>
        <div className="sub-title">{subtitle}</div>
      </div>
      <div
        className={["body", isOpen && "active"].join(" ")}
        ref={bodyRef}
        style={{ maxHeight: `${bodyHeight}px` }}
      >
        <div className="start" onClick={toggleOpen} />
        {creators.length > 0 && (
          <div className="creators">{`Created By: ${creators.join(", ")}`}</div>
        )}
        <div className="tags">
          {tags.map((t) => (
            <div className="tag">{t}</div>
          ))}
        </div>
        {video.url && (
          <iframe
            className="video"
            src={video.URL}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={video.title}
          />
        )}
        {deployedLink && (
          <div className="deployed-link">
            <a
              className="link-button"
              href={deployedLink}
              target="_blank"
              rel="noopener"
            >
              {"Visit Deployed Version"}
            </a>
            <div>{"(May take a moment to boot up!)"}</div>
          </div>
        )}
        <div className="code-repo">
          {codeRepo.only && (
            <a
              className="link-button"
              href={codeRepo.only}
              target="_blank"
              rel="noopener"
            >
              {"Github Repo"}
            </a>
          )}
          {codeRepo.front && (
            <a
              className="link-button"
              href={codeRepo.front}
              target="_blank"
              rel="noopener"
            >
              {"Github Repo - Front End"}
            </a>
          )}
          {codeRepo.back && (
            <a
              className="link-button"
              href={codeRepo.back}
              target="_blank"
              rel="noopener"
            >
              {"Github Repo - Back End"}
            </a>
          )}
        </div>
        {description.length > 0 && (
          <div className="description">
            {description.map((p) => (
              <p>{p}</p>
            ))}
          </div>
        )}
        <div className="end" onClick={toggleOpen} />
      </div>
    </div>
  );
}
