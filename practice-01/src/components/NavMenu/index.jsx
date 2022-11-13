import {
	ShoppingOutlined,
	BarsOutlined,
	ShopOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import style from './navmenu.module.scss';

const menuItems = [
	{
		key: 'vacancy',
		icon: ShoppingOutlined,
		name: 'Elanlar',
		url: '/vacancies',
	},
	{
		key: 'category',
		icon: BarsOutlined,
		name: 'Kateqoriyalar',
		url: '/categories',
	},
	{
		key: 'industry',
		icon: ShopOutlined,
		name: 'Senaye',
		url: '/industries',
	},
	{
		key: 'company',
		icon: TeamOutlined,
		name: 'Sirketler',
		url: '/companies',
	},
];

export const NavMenu = () => {
	return (
		<nav className={style.nav}>
			<ul className={style.nav__menu}>
				{menuItems.map(({ key, icon: Icon, name, url }) => {
					const active = window.location.href.endsWith(url);
					return (
						<li
							key={key}
							className={active ? style.nav__menu__itemActive : style.nav__menu__item}
						>
							<a href={url} className={style.nav__menu__link}>
								<Icon className={style.nav__menu__link__icon} />
								<span className={style.nav__menu__link__text}>{name}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
