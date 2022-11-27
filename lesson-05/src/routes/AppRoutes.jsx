import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import { LangController, Loading } from '../components';
import { Home, NotFound, Products, View, viewLoader } from '../pages';
import App from '../App';
import { route } from './router';

const About = loadable(
	() => import('../pages/About').then((page) => page.About),
	{
		fallback: <Loading />,
	}
);

export const router = createBrowserRouter([
	{
		path: route.lang,
		element: <LangController />,
		children: [
			{
				path: route.all,
				element: <App />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: route.home.about,
						element: <About />,
					},
					{
						path: route.home.products.index,
						element: <Products />,
						children: [
							{
								index: true,
								element: <div>list</div>,
							},
							{
								path: route.home.products.create,
								element: <div>create</div>,
							},
							{
								path: route.home.products.view,
								element: <View />,
								loader: viewLoader,
							},
						],
					},
					{
						path: route.all,
						element: <NotFound />,
					},
				],
			},
		],
	},
	{
		path: route.root,
		element: <LangController />,
	},
]);
