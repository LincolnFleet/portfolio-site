import React, { useState, useEffect } from 'react';

import ProjectAccordion from './project_accordion.jsx';
import ProjectsList from './projects_list.js';

function ProjectsContainer(props) {
    const [openProject, setOpenProject] = useState(null);

    function makeAccordions() {
        return ProjectsList().map((proj, index) => {
            return (<ProjectAccordion
                key={index}
                title={proj.title}
                subtitle={proj.subtitle}
                creators={proj.creators}
                date={proj.date}
                tags={proj.tags}
                deployedLink={proj.deployedLink}
                video={proj.video}
                codeRepo={proj.codeRepo}
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