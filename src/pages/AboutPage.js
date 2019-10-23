import React from 'react';
import './AboutPage.css';

import {
} from '../Bin-Components.js';

const allSkills = [
    'PostgreSQL',
    'Ruby',
    'Ruby on Rails',
    'JavaScript',
    'React',
    'Redux'
];

const allEdus = [
    {
        school: 'Flatiron School',
        dates: '3.2019 - 7.2019',
        course: 'Full Stack Web Development, Ruby on Rails, JavaScript and React Immersive Program'
    },
    {
        school: 'Elon University',
        dates: '2006 - 2009',
        course: 'Coursework completed toward Bachelor of Arts degree in Journalism, Digital Communications',
    },
];

const allJobs = [
    {
        employer: 'Real Estate Investment and Management',
        title: 'Principal',
        location: 'Atlanta, GA',
        startDate: '2014',
        endDate: '2019',
        description: 'Lead a highly successful investment portfolio with key stakeholders to leverage combined assets and realize opportunities in Atlanta’s booming real estate market by researching city development plans, predicting areas of growth, evaluating properties and building improvements and renovations.'
    },
    {
        employer: 'Abacus Group Builders',
        title: 'Superintendent Assistant',
        location: 'San Francisco, CA',
        startDate: '2012',
        endDate: '2013',
        description: 'Member of a specialized construction company working with high end, custom residential renovations. Supported project manager by transporting material and equipment between work sites, organizing inventory, and prioritizing an evolving task list across five job sites.'
    },
    {
        employer: 'Savvis, Inc.',
        title: 'Associate Regional Account Manager',
        location: 'Atlanta, GA',
        startDate: '2010',
        endDate: '2012',
        description: 'Supported Southeast regional sales team by coordinating account executive objectives with engineering, pricing, legal and implementation teams to produce actionable contract documentation according to sales deadlines.'
    }
];

const dividerSingle = ()=>{return <div style={{backgroundColor: 'rgba(255, 220, 090, 0.8)'}}/>};

function AboutPage() {

    function makeSkillElems() {
        return allSkills.map( (skill) =>{
            return (
                <span className='item'>{skill}</span>
            );
        });
    };

    function makeEduElems() {
        return allEdus.map( (edu) =>{
            return (
                <div className='item'>
                    <div className='left'>
                        <div className='title'>{edu.school}</div>
                        <div className='dates'>{edu.dates}</div>
                    </div>
                    {dividerSingle()}
                    <div className='right'>
                        <div className='course'>{edu.course}</div>
                    </div>
                </div>
            );
        });
    };

    function makeJobElems() {
        return allJobs.map( (job) =>{
            return (
                <div className='item'>
                    <div className='left'>
                        <div className='employer'>{job.employer}</div>
                        <div className='location'>{job.location}</div>
                    </div>
                    {dividerSingle()}
                    <div className='right'>
                        <div className='title'>{job.title}</div>
                        <span className='dates'>{job.startDate}-{job.endDate}</span>
                    </div>
                    {/* <div className='job description'>{job.description}</div> */}
                </div>
            );
        });
    };

    return (
        <div className='about-page'>
            <div className='about-title'>
                <div className='title'>About</div>
            </div>
            <div className='about-portrait'>
                (Stupid Face Head)
            </div>
            <div className='resume-modal-color'>fancy resume</div>
            <div className='resume-modal-print'>zebra resume</div>
            <div className='about-skill'>
                {makeSkillElems()}
            </div>
            <div className='about-education'>
                {makeEduElems()}
            </div>
            <div className='about-experience'>
                {makeJobElems()}
            </div>
        </div>
    );
};

export default AboutPage;