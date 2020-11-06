import React, { } from 'react';
import './blogs.css';

import BlogsCarousel from './blogs_carousel.jsx';
import BlogsFocus from './blogs_focus.jsx';

function BlogsPage(props) {

    return (
        <div className='blogs-page'>
            <div className='blogs-title'>
                <div className='title'>Blogs</div>
            </div>
            <BlogsCarousel />
            <BlogsFocus />
        </div>
    );
};

export default BlogsPage;