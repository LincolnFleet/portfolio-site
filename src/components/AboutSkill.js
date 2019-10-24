import React, {} from 'react';

import {
} from '../Bin-Components.js';

const allSkills = [
    '[PostgreSQL]',
    '[Ruby]',
    '[Ruby on Rails]',
    '[JavaScript]',
    '[React.js]',
    '[Redux]',
];

function makeSkillElems() {
    return allSkills.map( (skill) =>{
        return (
            <span className='item'>{skill}</span>
        );
    });
};

export default function AboutSkill() {
    return (
        <div className='about-skill'>
            {makeSkillElems()}
        </div>
    );
};