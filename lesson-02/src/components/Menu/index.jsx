import './style.css';

const menuList = [
	{
		title: 'Inbox',
		key: 'inbox',
		url: '/inbox',
	},
	{
		title: 'Jobs',
		key: 'jobs/my-profile',
		url: '/jobs',
	},
	{
		title: 'Salaries',
		key: 'salary',
		url: '/salaries',
	},
];

export const Menu = () => {
	return (
		<ul className='menu'>
			{menuList.map(({ key, title, url }) => (
				<li className='menu-item' key={key}>
					<a className='menu-link' href={url}>
						{title}
					</a>
				</li>
			))}
		</ul>
	);
};
