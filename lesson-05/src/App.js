import loadable from '@loadable/component';
import { Routes, Route, Link } from 'react-router-dom';
import { LangController, Loading } from './components';
import { Home, NotFound, Products } from './pages';

// const About = lazy(() => import('./pages/About'))
const LoadableAbout = loadable(
	() => import('./pages/About').then((page) => page.About),
	{
		fallback: <Loading />,
	}
);

function App() {
	return (
		<div>
			<h1>Welcome Router</h1>
			<div
				style={{
					display: 'flex',
					gap: '30px',
				}}
			>
				<Link to=''>Home</Link>
				<Link to='about'>About</Link>
				<Link to='products'>Products</Link>
				<Link to='404'>404</Link>
			</div>
			{/* <Suspense fallback={<Loading />}> */}
			<Routes>
				<Route path=':lang/*' element={<LangController />}>
					<Route index element={<Home />} />
					<Route path='about' element={<LoadableAbout />} />
					<Route path='products/*' element={<Products />} />
					<Route path='*' element={<NotFound />} />
				</Route>
				<Route path='/' element={<LangController />} />
			</Routes>
			{/* </Suspense> */}
		</div>
	);
}

export default App;

// kazim-shop.com
// => /az
// => /az/home
// => /az/about
// az === :lang
// langList => ['az', 'en', 'ru', 'ge', 'am', 'tr', 'ir']
