import * as React from 'react';
// styles
import './global.css';
import { app } from './index.module.css';
// components
import NavBar from '../components/navbar';
import Layout from '../components/layout';
import AboutSummary from '../components/about_summary';
import ProjectsSummary from '../components/projects_summary';
import BlogsSummary from '../components/blogs_summary';
import Contact from '../components/contact';
// pages

const pageNames = ["About", "Projects", "Blogs", "Contact"];

const App = () => {
	return (
		<div className={app}>
			<header>
				<title>Travis Martin</title>
			</header>
			<NavBar pageNames={pageNames} />
			<main>
				<Layout>
					<AboutSummary />
					<ProjectsSummary />
					<BlogsSummary />
					<Contact />
				</Layout>
			</main>
		</div>
	);
}

export default App;
