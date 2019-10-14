import React, {} from 'react';
import './LandingPage.css';
import {useScrollPosition} from '../hooks/useScrollPosition.js';
import background from '../HeaderImage.jpg';

function LandingPage() {
    
    
    return (
        <div className='landingpage'>
            <picture className='background-image'>
                <source media='(min-width: 401px)' src={background}/>
                <source media='(max-width: 400px)' src={background}/>
            </picture>
            <span className='name first'>Travis</span>
            <span className='name last'>Martin</span>
        </div>
    );
};

export default LandingPage;