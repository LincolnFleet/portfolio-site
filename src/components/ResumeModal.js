import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import './ResumeModal.css';

import {usePdf} from 'react-pdf-js';

export default function ResumeModal({isOpen, toggleOpen}) {
    const [resumeVersion, setResumeVersion] = useState('public/resume/Resume(bw).pdf');

    const canvasEl = useRef(null);

    const [loading] = usePdf({
        file: resumeVersion,
        canvasEl
      });

    if (isOpen) {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className='modal-overlay'/>
                    <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
                    <div className='modal'>
                        <div className='modal-header'>
                            <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={toggleOpen}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div>
                            {loading && <span>Loading...</span>}
                            <canvas ref={canvasEl} />
                        </div>
                    </div>
                    </div>
                </React.Fragment>
            , document.body)
        );
    } else {
        return null;
    };
};