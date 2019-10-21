import React, {useState} from 'react';
import './ProjectsPage.css';

import {
    ProjectsFilter,
    ProjectsAccordion,
    ProjectsDisplay,
} from '../Bin-Components.js';

function ProjectsPage() {
    const [selectedTags, setSelectedTags] = useState({
        'javascript': true,
        'ruby': true,
        'rails': true,
        'react': true,
    })
    const [selectedProject, setSelectedProject] = useState({'id': null})

    return (
        <div className='projects-page'>
            <div className='projects-title'>
                <div className='title'>Projects</div>
            </div>
            <ProjectsFilter
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
            <ProjectsAccordion
                selectedTags={selectedTags}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
            <ProjectsDisplay
                selectedProject={selectedProject}
            />
        </div>
    );
};

export default ProjectsPage;