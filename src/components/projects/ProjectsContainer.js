import React, {useState, useEffect} from 'react';

import {
    ProjectAccordion,
    ProjectsList,
} from '../../Bin-Components.js';

function ProjectsContainer() {
    const [openProject, setOpenProject] = useState(null)

    function makeAccordions() {
        return ProjectsList().map((proj, index)=>{
            return (<ProjectAccordion
                key={index}
                title={proj.title}
                subtitle={proj.subtitle}
                creators={proj.creators}
                date={proj.date}
                tags={proj.tags}
                deployedLink={proj.deployedLink}
                video={proj.video}
                description={proj.description}
            />)
        });
    };

    return (
        <div className='projects-container'>
            {makeAccordions()}
        </div>
    );
};

export default ProjectsContainer;