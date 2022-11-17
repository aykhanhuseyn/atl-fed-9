import React from 'react';
import { FooterMenu } from '../FooterMenu';
import { NavMenu } from '../NavMenu';
import { NavTop } from '../NavTop';
import { Profile } from '../Profile';
import { FooterCopyright } from '../FooterCopyright';
import { SiteBy } from '../SiteBy';
import './style.css';

export const Navigation = () => {
	return (
		<div className='navigation'>
			<header>
				<NavTop />
				<NavMenu />
				<Profile />
				<div className='theme-changer'></div>
			</header>
			<footer>
				<FooterMenu />
				<FooterCopyright />
				<SiteBy />
			</footer>
		</div>
	);
};
