import React, {useState} from 'react';
import './Footer.css';

import Github from '../assets/media/Github.png';
import GithubOctocat from '../assets/media/Github-Octocat.png';

import WordpressTitle from '../assets/media/wordpress-title.png';
import WordpressIcon from '../assets/media/wordpress-icon.png';

import LinkedinIcon from '../assets/media/LinkedIn-Icon.png';

import {
} from '../Bin-Components.js';

function Footer() {
    const [linkObs, setlinkObs] = useState({
        github: {
            icon: GithubOctocat,
            title: Github,
            href: 'https://github.com/LincolnFleet'
        },
        wordpress: {
            icon: WordpressIcon,
            title: WordpressTitle,
            href: 'https://wordpress.com/view/paralogyunbound.home.blog',
        },
        linkedin: {
            icon: LinkedinIcon,
            title: null,
            href: 'https://www.linkedin.com/in/travisemartin/'
        },
    });

    return (
        <div className='footer'>
            <div className='link-container'>
                <a className='link' href={linkObs.github.href}>
                    <img className='link-icon' src={linkObs.github.icon} alt='git hub icon'/>
                    <img className='link-title' src={linkObs.github.title} alt='git hub title'/>
                </a>
                <a className='link' href={linkObs.linkedin.href}>
                    <img className='link-icon' src={linkObs.linkedin.icon} alt='linked in icon'/>
                </a>
                <a className='link' href={linkObs.wordpress.href}>
                    <img className='link-icon' src={linkObs.wordpress.icon} alt='word press icon'/>
                    <img className='link-title' src={linkObs.wordpress.title} alt='word press title'/>
                </a>
            </div>
        </div>
    );
};

export default Footer;