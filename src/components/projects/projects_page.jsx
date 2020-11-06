import React, { useState } from 'react';
import './projects.css';

import ProjectsFilter from './projects_filter.jsx';
import ProjectsConainer from './projects_container.jsx';

function ProjectsPage(props) {
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
            <ProjectsContainer />
        </div>
    );
};

export default ProjectsPage;