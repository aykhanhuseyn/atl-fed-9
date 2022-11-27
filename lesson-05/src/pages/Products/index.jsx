import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Products = () => {
	return (
		<div>
			<h2>Products</h2>;
			<div
				style={{
					display: 'flex',
					gap: '30px',
				}}
			>
				<Link to=''>Products</Link>
				<Link to='view/1'>Products slash ID</Link>
				<Link to='create'>Products create new product</Link>
			</div>
			<Outlet />
		</div>
	);
};

export * from './View';
