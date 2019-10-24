import React, {} from 'react';
import ReactDOM from 'react-dom';
import resumeZebra from '../assets/resume/Travis Martin - Resume (b&w).pdf';
import './ResumeModal.css';

export default function ResumeModal({isOpen, toggleOpen}) {
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
                        <img src={resumeZebra} alt='printable resume' title='printable resume'/>
                    </div>
                    </div>
                </React.Fragment>
            , document.body)
        );
    } else {
        return null;
    };
};