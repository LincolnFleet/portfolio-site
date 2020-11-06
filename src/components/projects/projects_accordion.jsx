import React, { useState, useRef } from 'react';

function ProjectAccordion(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [bodyHeight, setBodyHeight] = useState('0px')

    const bodyRef = useRef(null);

    function toggleOpen() {
        setBodyHeight(isOpen==='active' ? '0px' : `${bodyRef.current.scrollHeight}px`)
        setIsOpen(isOpen==='active' ? '' : 'active');
    };

    return (
        <div className='project-accordion' key={props.key}>
            <div className='header' onClick={toggleOpen}>
                <div className='title'>{props.title}</div>
                <div className='sub-title'>{props.subtitle}</div>
            </div>
            <div className={`body ${isOpen}`} ref={bodyRef} style={{maxHeight: `${bodyHeight}`}}>
                <div className='start' onClick={toggleOpen}/>
                    <div className='creators'>
                        Created By:
                        {props.creators.map(name=><div className='creator'>{name}</div>)}
                    </div>
                    <div className='tags'>
                        {props.tags.map(tech=><div className='tag'>{tech}</div>)}
                    </div>
                    <iframe className='video'
                        src={props.video.URL}
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title={props.video.title}
                        />
                    <div className='deployed-link'>
                        <a className='link-button' href={props.deployedLink} target='_blank' rel='noopener'>Visit Deployed Version</a>
                        <div>(May take a moment to boot up!)</div>
                    </div>
                    <div className='code-repo'>
                        {props.codeRepo.only ? <a className='link-button' href={props.codeRepo.only} target='_blank' rel='noopener'>Github Repo</a> : null}
                        {props.codeRepo.front ? <a className='link-button' href={props.codeRepo.front} target='_blank' rel='noopener'>Github Repo - Front End</a> : null}
                        {props.codeRepo.back ? <a className='link-button' href={props.codeRepo.back} target='_blank' rel='noopener'>Github Repo - Back End</a> : null}
                    </div>
                    <div className='description'>
                        {props.description.map(p=>{
                            return (<React.Fragment><br/><p className='segment'>{p}</p></React.Fragment>);
                        })}
                    </div>
                <div className='end' onClick={toggleOpen}/>
            </div>
        </div>
    );
};

export default ProjectAccordion;