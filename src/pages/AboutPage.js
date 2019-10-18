import React, {useState} from 'react';
import './AboutPage.css';

import {
} from '../Bin-Components.js';

function AboutPage() {
    const [jobObjs, setJobObs] = useState({
        job1: {
            employer: '',
            title: '',
            startDate: '',
            endDate: '',
            description: '',
        },
        job2: {
            employer: '',
            title: '',
            startDate: '',
            endDate: '',
            description: '',
        },
        job3: {
            employer: '',
            title: '',
            startDate: '',
            endDate: '',
            description: '',
        },
    });

    function makeJobItemElems() {
        for (let job in jobObjs) {
            return (
                <div className='item'>
                    <span>{job.employer}</span>
                    {/* job item content */}
                </div>
            );
        };
    };

    return (
        <div className='about-page'>
            <div className='about-title'>
                <div className='title'>About</div>
            </div>
            <div className='about-portrait'>
                (Stupid Face Head)
            </div>
            <div className='about-education'>
                (Edu / Certs)
                <div className='item'>
                    I got lernin
                </div>
                <div className='item'>
                    ...sorta
                </div>
            </div>
            <div className='about-experience'>
                (Professional Experience)
                <div className='item'>
                    this one time I herpaderped
                </div>
                <div className='item'>
                    shortly thereafter, I continued herpaderping
                </div>
                <div className='item'>
                    subsequently, I still herpaderp to this day
                </div>
            </div>
        </div>
    );
};

export default AboutPage;