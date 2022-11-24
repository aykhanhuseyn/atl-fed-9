import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { View, viewLoader } from './View';

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
			<Routes>
				<Route index element={<div>list</div>} />
				<Route path='create' element={<div>create</div>} />
				<Route path='view/:id' element={<View />} />
			</Routes>
		</div>
	);
};
