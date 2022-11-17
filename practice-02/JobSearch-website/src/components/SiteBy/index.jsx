import footerPhoto from '../../assets/siteBy.svg';
import style from './siteby.module.scss';

const person = {
	text: 'Site by',
	name: 'Jeykhun ',
	surname: 'Imanov ',
	url: 'https://jis.az',
	photo: footerPhoto,
	linkText: 'Jeykhun Imanov Studio',
};

export const SiteBy = () => {
	return (
		<div className={style.siteby}>
			<span className={style.siteby__text}>{person.text}</span>
			<img src={person.photo} alt={person.text} srcset='' />
			<a href={person.url} className={style.siteby__link} target='__blank'>
				{person.linkText}
			</a>
		</div>
	);
};
