import React, {} from 'react';

import {
} from '../../Bin-Components.js';

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

const dividerSingle = ()=>{return <div style={{backgroundColor: 'rgba(255, 220, 090, 0.8)'}}/>};

export default function AboutEducation() {
    return (
        <div className='about-education'>
            {makeEduElems()}
        </div>
    );
};