import React, {} from 'react';
import './LandingPage.css';
import {useScrollPosition} from '../hooks/useScrollPosition.js';

function LandingPage() {
    
    return (
        <div className='landingpage'>
            <span className='name first'>Travis</span>
            <span className='name last'>Martin</span>
        </div>
    );
};

export default LandingPage;