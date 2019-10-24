import React, {} from 'react';
import ReactDOM from 'react-dom';
import resumeZebra from '../assets/resume/Travis Martin - Resume (b&w).pdf';
import './ResumeModals.css';

import {
} from '../Bin-Components.js';

import {
} from '../Bin-Hooks.js';

export default function ResumeZebra({zebraIsOpen, toggleZebra}) {
    if (zebraIsOpen) {
        return (
            ReactDOM.createPortal(
                <div className='resume-zebra'>
                    <div className='modal-overlay'/>
                    <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
                    <div className='modal'>
                        <div className='modal-header'>
                            <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={toggleZebra}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <iframe src={resumeZebra} alt='printable resume' title='printable resume'/>
                    </div>
                    </div>
                </div>
            , document.body)
        );
    } else {
        return null;
    };
};