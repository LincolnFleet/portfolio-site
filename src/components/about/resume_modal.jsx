import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./resume_modal.css";

import { usePdf } from "react-pdf-js"; // https://www.npmjs.com/package/@mikecousins/react-pdf
import zebraResume from "../../assets/resume/Resume(bw).pdf";

function ResumeModal(props) {
  const { isOpen, setIsOpen } = props;

  const [resumeVersion, setResumeVersion] = useState(zebraResume);

  const canvasEl = useRef(null);
  const [loading] = usePdf({ file: resumeVersion, canvasEl });

  if (isOpen) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal-overlay" />
        <div
          className="modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal">
            <div className="modal-header">
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="resume-display">
              {loading && <span>Loading...</span>}
              <canvas className="resume-canvas" ref={canvasEl} />
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  } else {
    return null;
  }
}

module.exports = ResumeModal;
