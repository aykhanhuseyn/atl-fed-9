import { Menu } from '../Menu';
import { Status } from '../shared/Status';
import logo from '../../assets/logo.svg';
import './style.css';
import { Profile } from '../Profile';

export const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='left'>
					<img src={logo} alt='djinni logo' />
					<Menu />
				</div>

				<div className='right'>
					<Status statusName='online' />
					<Profile />
				</div>
			</div>
		</header>
	);
};
