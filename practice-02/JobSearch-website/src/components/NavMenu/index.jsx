import { MenuItem } from '../shared';
import { menuItems } from './data';
import style from './navmenu.module.scss';

export const NavMenu = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.nav__menu}>
				{menuItems.map((item) => (
					<MenuItem {...item} />
				))}
			</ul>
		</nav>
	);
};
