import React, {} from 'react';
import './LandingPage.css';
import {useScrollPosition} from '../hooks/useScrollPosition.js';
import {
} from '../Bin-Components.js';

function LandingPage() {
    
    return (
        <div className='landing-page'>
            <div className='landing-portrait'></div>
            <div className='landing-name'>
                <div className='first'>Travis</div>
                <div className='last'>Martin</div>
            </div>
            <div className='landing-foot'>
                <span className='byline'>Software Engineer, Full Stack Web Dev</span>
            </div>
        </div>
    );
};

export default LandingPage;