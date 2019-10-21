import React, {} from 'react';
import './LandingPage.css';
import {useScrollPosition} from '../hooks/useScrollPosition.js';
import {
} from '../Bin-Components.js';

function LandingPage() {
    
    return (
        <div className='landing-page'>
            <div className='landing-portrait'></div>
            <span className='landing-name first'>Travis</span>
            <span className='landing-name last'>Martin</span>
            <div className='landing-foot'>
                <span className='landing-byline'>Software Engineer, Full Stack Web Dev</span>
            </div>
        </div>
    );
};

export default LandingPage;