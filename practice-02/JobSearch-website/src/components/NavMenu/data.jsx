import {
	ShoppingOutlined,
	BarsOutlined,
	ShopOutlined,
	TeamOutlined,
} from '@ant-design/icons';

export const menuItems = [
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
		name: 'Shirketler',
		url: '/companies',
	},
];
