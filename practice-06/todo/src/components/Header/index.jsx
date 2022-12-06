import React from 'react';

export const Header = ({ isDark }) => {
	return (
		<header>
			<h1>T O D O</h1>
			<img
				src={`/assets/icon-${isDark ? 'sun' : 'moon'}.svg`}
				alt={`icon ${isDark ? 'sun' : 'moon'}`}
			/>
		</header>
	);
};
