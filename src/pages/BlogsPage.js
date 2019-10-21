import React, {} from 'react';
import './BlogsPage.css';

import {
    BlogsCarousel,
    BlogsFocus,
} from '../Bin-Components.js';

function BlogsPage() {
    return (
        <div className='blogs-page'>
            <div className='blogs-title'>
                <div className='title'>Blogs</div>
            </div>
            <BlogsCarousel/>
            <BlogsFocus/>
        </div>
    );
};

export default BlogsPage;