import { HeartOutlined, UserOutlined } from '@ant-design/icons';

export const menuItems = [
	{
		key: 'favorite',
		icon: HeartOutlined,
		name: 'Secilmis Elanlar',
		url: '/favorites',
		count: 0,
	},
	{
		key: 'subscribe',
		icon: UserOutlined,
		name: 'Abune-kateqoriyalar',
		url: '/subscribes',
	},
];
