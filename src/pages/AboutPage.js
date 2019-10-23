import React from 'react';
import './AboutPage.css';

import {
    AboutSkill,
    AboutEducation,
    AboutExperience,
} from '../Bin-Components.js';

export default function AboutPage() {
    return (
        <div className='about-page'>
            <div className='about-title'>
                <div className='title'>About</div>
            </div>
            <div className='about-portrait'>
                (Stupid Face Head)
            </div>
            <div className='resume-modal-color'>peacock resume</div>
            <div className='resume-modal-print'>zebra resume</div>
            <AboutSkill/>
            <AboutEducation/>
            <AboutExperience/>
        </div>
    );
};