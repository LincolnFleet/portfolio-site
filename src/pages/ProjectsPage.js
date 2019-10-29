import React, {useState} from 'react';
import './ProjectsPage.css';

import {
    ProjectsFilter,
    ProjectsContainer,
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
            <ProjectsContainer selectedProject={selectedProject}/>
        </div>
    );
};

export default ProjectsPage;