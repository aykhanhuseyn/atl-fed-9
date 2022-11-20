import React, { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

const hello = () => {
	console.log('salam');
};

export const Func = (props) => {
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	console.log('====================================');
	// 	console.log('useEffect with [] dependency');
	// 	console.log(props);
	// 	console.log(Date.now());
	// 	console.log('====================================');
	// }, []);

	useEffect(() => {
		console.log('====================================');
		console.log('useEffect with [count] dependency');
		console.log(props);
		console.log(Date.now());
		console.log('====================================');
	}, [count]);

	useEffect(() => {
		document.body.addEventListener('click', hello);

		return () => {
			console.log('unmount');
			document.body.removeEventListener('click', hello);
		};
	}, []);

	useLayoutEffect(() => {
		console.log('====================================');
		console.log('useLayoutEffect');
		console.log('====================================');
	}, []);

	return (
		<div>
			<h1>Func</h1>

			<button
				onClick={() => {
					setCount((currentCount) => currentCount + 1);
					// setCount(count + 1);
					// count = 1 ++
					console.log('====================================');
					console.log('on Click');
					console.log(count); // 1
					console.log('====================================');
				}}
			>
				count: {count}
			</button>
		</div>
	);
};
