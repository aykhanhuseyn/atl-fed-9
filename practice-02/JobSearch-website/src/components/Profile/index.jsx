import { MenuItem } from '../shared';
import { menuItems } from './data';
import style from './profile.module.scss';

export const Profile = () => {
	return (
		<div className={style.profile}>
			<span className={style.profile__title}>Sizin JobSearch</span>
			<ul className={style.profile__menu}>
				{menuItems.map((item) => (
					<MenuItem {...item} />
				))}
			</ul>
		</div>
	);
};

// React.createElement('MenuItem', { name: 'ayxan', ...{ name: 'John', ve sair } })
