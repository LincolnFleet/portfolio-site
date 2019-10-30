import React, {useState} from 'react';
import './ProjectsPage.css';

import {
    ProjectsFilter,
    ProjectsContainer,
} from '../Bin-Components.js';

function ProjectsPage() {
    // const [selectedTags, setSelectedTags] = useState({
    //     'javascript': true,
    //     'ruby': true,
    //     'rails': true,
    //     'react': true,
    // })

    return (
        <div className='projects-page'>
            <div className='projects-title'>
                <div className='title'>Projects</div>
            </div>
            {/* <ProjectsFilter
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            /> */}
            <ProjectsContainer/>
        </div>
    );
};

export default ProjectsPage;