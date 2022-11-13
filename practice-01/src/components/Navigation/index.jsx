import React from 'react';
import { NavMenu } from '../NavMenu';
import { NavTop } from '../NavTop';
import './style.css';

export const Navigation = () => {
	return (
		<div className='navigation'>
			<header>
				<NavTop />
				<NavMenu />
				<div className='profile'></div>
				<div className='theme-changer'></div>
			</header>

			<footer></footer>
		</div>
	);
};
