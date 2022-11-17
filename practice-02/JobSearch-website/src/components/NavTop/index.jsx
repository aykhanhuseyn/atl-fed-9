import logo from '../../assets/logo.svg';
import style from './navtop.module.scss';

const languages = [
	{
		key: 'az',
		name: 'AZ',
		fullName: 'Azerbaijan',
	},
	{
		key: 'en',
		name: 'EN',
		fullName: 'English',
	},
	{
		key: 'ru',
		name: 'RU',
		fullName: 'Russian',
	},
	{
		key: 'ge',
		name: 'GE',
		fullName: 'Georgian',
	},
];

export const NavTop = () => {
	return (
		<div className={style.top}>
			<img className={style.top__logo} src={logo} alt='job search logo' />

			<select className={style.top__lang} name='lang'>
				{languages.map(({ key, name }) => (
					<option key={key} value={key}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};