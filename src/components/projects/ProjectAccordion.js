import React, {useState, useRef} from 'react';

import {
} from '../../Bin-Components.js';

function ProjectAccordion(props) {
    const [isOpen, setIsOpen] = useState('');
    const [bodyHeight, setBodyHeight] = useState('0px')

    const bodyRef = useRef(null);

    function toggleOpen() {
        setBodyHeight(isOpen==='active' ? '0px' : `${bodyRef.current.scrollHeight}px`)
        setIsOpen(isOpen==='active' ? '' : 'active');
    };

    return (
        <div className={`project-accordion ${isOpen}`} key={props.key}>
            <div className='header' onClick={toggleOpen}>
                <div className='title'>{props.title}</div>
                <div className='sub-title'>{props.subtitle}</div>
            </div>
            <div className='body' ref={bodyRef} style={{maxHeight: `${bodyHeight}`}}>
                <div className='creators'>
                    Created By:
                    {props.creators.map(name=><div className='creator'>{name}</div>)}
                </div>
                <div className='tags'>
                    {props.tags.map(tech=><div className='tag'>{tech}</div>)}
                </div>
                <div className='video'>{props.video}</div>
                <a className='deployed-link' href={props.deployedLink} target='_blank'>Open deployed version in new window (May take a moment to boot up!)</a>
                <div className='description'>
                    {props.description.map(p=>{
                    return (<React.Fragment><br/><p className='segment'>{p}</p></React.Fragment>);
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectAccordion;