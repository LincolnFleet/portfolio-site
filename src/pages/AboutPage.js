import React, {} from 'react';
import './AboutPage.css';

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
            <button className='resume-button' type='button' onClick={toggleOpen}>resume modal</button>
            <ResumeModal isOpen={isOpen} toggleOpen={toggleOpen}/>
            <AboutSkill/>
            <AboutEducation/>
            <AboutExperience/>
        </div>
    );
};