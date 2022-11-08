import React from 'react';
import reactSvg from '../../assets/react.svg';
import './style.css';

export const Header = () => {
	// React.createElement('header', { className: 'header' })
	return (
		<header className='header'>
			<img src={reactSvg} alt='logo' />
			<ul>
				<li>Inbox</li>
				<li>Jobs</li>
				<li>Salaries</li>
			</ul>

			<ul>
				<li>online</li>
				<li>Profile</li>
			</ul>
		</header>
	);
};
