export const route = {
	lang: ':lang/*',
	root: '/',
	all: '*',
	home: {
		index: '/*',
		about: 'about',
		products: {
			index: 'products/*',
			create: 'create',
			view: 'view/:id',
		},
	},
};
