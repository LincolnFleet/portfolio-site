import React, {} from 'react';

import {
} from '../../Bin-Components.js';

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

const dividerSingle = ()=>{return <div style={{backgroundColor: 'rgba(255, 220, 090, 0.8)'}}/>};

export default function AboutExperience() {
    return (
        <div className='about-experience'>
            {makeJobElems()}
        </div>
    );
};