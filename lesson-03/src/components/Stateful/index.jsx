import { useState } from 'react';

function getRandomId() {
	return parseInt(Math.random() * 9 + 1);
}

export const Stateful = () => {
	const [user, setUser] = useState();

	// NEVER DO THIS:
	// user = 5;

	// DO THIS:
	// setUser(5)

	return (
		<div>
			<h1>Stateful Component</h1>

			<h2>MALIKMAMMAD: {user?.MALIKMAMMAD}</h2>

			<h2>name: {user?.name}</h2>
			<h2>username: {user?.username}</h2>
			<h2>email: {user?.email}</h2>
			<h2>city: {user?.address?.city}</h2>

			<button
				onClick={() => {
					const id = getRandomId();
					fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
						.then((row) => row.json())
						.then((data) => {
							// alert(JSON.stringify(data));
							setUser(data);
							// user === data
						});
				}}
			>
				api call
			</button>
		</div>
	);
};
