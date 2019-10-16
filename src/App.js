import React from 'react';
import './App.css';
import {
  LandingPage,
  AboutPage,
  ProjectsPage,
  BlogsPage,
} from './Bin-Pages.js';
import {
  Footer
} from './Bin-Components.js';

function App() {
  
  return (
    <div className='App'>
      <div className='content'>
        <LandingPage />
        <AboutPage/>
        <ProjectsPage/>
        <BlogsPage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;