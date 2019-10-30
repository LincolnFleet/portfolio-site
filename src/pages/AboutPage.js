import React, {} from 'react';
import './AboutPage.css';
import zebraResume from '../assets/resume/Resume(bw).pdf';

import {
    AboutSkill,
    AboutEducation,
    AboutExperience,
    ResumeModal,
} from '../Bin-Components.js';

import {
    useResumeModal,
} from '../Bin-Hooks.js';

export default function AboutPage() {
    const {isOpen, toggleOpen} = useResumeModal();

    return (
        <div className='about-page'>
            <div className='about-title'>
                <div className='title'>About</div>
            </div>
            <div className='about-portrait'>
                (Stupid Face Head)
            </div>
            <a className='resume-button' href={zebraResume} target='_blank' rel='noopener'>Resume</a>
            {/* <button className='resume-button' type='button' onClick={toggleOpen}>resume modal</button> */}
            <ResumeModal isOpen={isOpen} toggleOpen={toggleOpen}/>
            <AboutSkill/>
            <AboutEducation/>
            <AboutExperience/>
        </div>
    );
};