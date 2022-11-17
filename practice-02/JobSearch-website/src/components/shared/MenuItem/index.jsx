import React from 'react';
import style from './menuItem.module.scss';

export const MenuItem = ({ key, url, name, icon: Icon, count = null }) => {
	const active = window.location.href.includes(url);

	return (
		<div
			role='menuitem'
			key={key}
			className={active ? style['item--active'] : style.item}
		>
			<a href={url} className={style.item__link}>
				<Icon className={style.item__link__icon} />
				<span className={style.item__link__text}>{name}</span>
				{count !== null && <span className={style.item__link__badge}>{count}</span>}
			</a>
		</div>
	);
};

// <div id="hello" ></div>
// <Person id="hello" name="John" surname="Doe" />
