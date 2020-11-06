import React, { } from 'react';

const allSkills = [
    '[PostgreSQL]',
    '[Ruby]',
    '[Ruby on Rails]',
    '[JavaScript]',
    '[React.js]',
    '[Redux]',
];

function makeSkillElems() {
    return allSkills.map((skill) => {
        return (
            <span className='item'>{skill}</span>
        );
    });
};

export default function Skills(props) {

    return (
        <div className='skills'>
            {makeSkillElems()}
        </div>
    );
};