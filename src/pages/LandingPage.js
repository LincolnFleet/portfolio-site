import React, {} from 'react';
import './LandingPage.css';
import {useScrollPosition} from '../hooks/useScrollPosition.js';
import {
} from '../Bin-Components.js';

function LandingPage() {
    
    return (
        <div className='landingpage'>
            <span className='name first'>Travis</span>
            <span className='name last'>Martin</span>
            <div className='banner'>
                <span className='byline'>Software Engineer, Full Stack Web Dev</span>
            </div>
        </div>
    );
};

export default LandingPage;