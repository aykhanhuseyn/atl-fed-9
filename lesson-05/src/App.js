import { Link, Outlet } from 'react-router-dom';

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
			<Outlet />
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
