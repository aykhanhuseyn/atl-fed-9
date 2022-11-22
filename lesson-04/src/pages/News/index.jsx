import { Outlet } from 'react-router-dom';

export const News = ({ children }) => {
	return (
		<div>
			<h1>News</h1>
			<Outlet />
			{/* <h2 style={{ color: 'red' }}>children {children}</h2> */}
		</div>
	);
};

export * from './List';
export * from './Post';
