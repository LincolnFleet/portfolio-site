import React, {} from 'react';
import './AboutPage.css';

import {
    AboutSkill,
    AboutEducation,
    AboutExperience,
    ResumeZebra,
} from '../Bin-Components.js';

import {
    useResumePeacockModal,
    useResumeZebraModal,
} from '../Bin-Hooks.js';

export default function AboutPage() {
    const {zebraIsOpen, setZebraIsOpen} = useResumeZebraModal();
    const {peacockIsOpen, setPeacockIsOpen} = useResumePeacockModal();

    return (
        <div className='about-page'>
            <div className='about-title'>
                <div className='title'>About</div>
            </div>
            <div className='about-portrait'>
                (Stupid Face Head)
            </div>
            <button className='resume-peacock-button' type='button'>peacock resume</button>
            <button className='resume-zebra-button' type='button' onClick={setZebraIsOpen}>zebra resume</button>
            <ResumeZebra zebraIsOpen={zebraIsOpen} toggleZebra={setZebraIsOpen}/>
            <AboutSkill/>
            <AboutEducation/>
            <AboutExperience/>
        </div>
    );
};