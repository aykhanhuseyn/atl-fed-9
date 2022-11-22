import { Link } from 'react-router-dom';

// <Layout>CHILDREN</Layout>

export const Layout = ({ children }) => {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about-crazy'>Crazy About</Link>
						</li>
						<li>
							<Link to='/about-lazy'>Lazy About</Link>
						</li>
						<li>
							<Link to='/news'>News</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>{children}</main>
			{/* React.createElement('main', {}, 'All....') */}
			<footer>&copy; {new Date().getFullYear()}</footer>
		</>
	);
};
