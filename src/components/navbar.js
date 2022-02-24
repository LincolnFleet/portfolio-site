import * as React from 'react';
// styles
import { navbar } from './navbar.module.css';

const NavBar = ({ pageNames }) => {
	return (
		<div className={navbar}>
			<ul>
				{
					pageNames.map((name, idx) => (
						<li key={idx}>
							<a className='nav link' href={`#${name}`} rel='noreferrer'>{name}</a>
						</li>
					))
				}
				<li key='linkedin-link'>
					<a className='nav link'
						href='https://www.linkedin.com/in/travisemartin/'
						rel='noreferrer'
						target='_blank'
					>Linkedin</a>
				</li>
				<li key='github-link'>
					<a className='nav link'
						href='https://github.com/LincolnFleet/'
						rel='noreferrer'
						target='_blank'
					>Github</a>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
