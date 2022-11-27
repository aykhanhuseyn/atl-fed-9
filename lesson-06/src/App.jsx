import { useState, useEffect, useCallback } from 'react';
import { Avatar, List, Checkbox, Button } from 'antd';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('./data.json')
			.then((x) => x.json())
			.then((data) => {
				setTodos(data);
			});
	}, []);

	// const updateCheckedStatus = useCallback(
	// 	(id) => {
	// 		const found = todos.find((item) => item.id === id);

	// 		if (found) {
	// 			setTodos([
	// 				...todos.filter((item) => item.id !== id),
	// 				{ ...found, checked: !found.checked },
	// 			]);
	// 		}
	// 	},
	// 	[todos]
	// );

	const updateCheckedStatus = useCallback(
		(id) => {
			const clone = JSON.parse(JSON.stringify(todos));

			clone.forEach((item) => {
				if (item.id === id) {
					item.checked = !item.checked;
				}
			});

			setTodos(clone);
		},
		[todos]
	);

	const addTodo = () => {
		const newTodo = {
			id: 1,
			title: 'Start using todo added manually',
			description: 'Salam qaqasahsdh dshkfbs ds dsh gfksd ashfdhgjksl',
			createdAt: Date.now(),
			checked: false,
		};
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Button onClick={addTodo} type='primary'>
				Add TODO
			</Button>
			<List
				style={{ width: '500px' }}
				dataSource={todos}
				renderItem={(item) => {
					return (
						<List.Item key={item.id}>
							<Checkbox
								onClick={() => updateCheckedStatus(item.id)}
								checked={item.checked}
							/>
							<Button type='default' danger onClick={() => removeTodo(item.id)}>
								delete
							</Button>
							<List.Item.Meta
								avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
								title={<a href='https://ant.design'>{item.title}</a>}
								description={item.description}
							/>
						</List.Item>
					);
				}}
			/>
		</div>
	);
}

export default App;

// const listContainer = document.getElementById('ul');
// const data = [1,2,3,4,5,6];
// data.forEach(number => {
//   listContainer.innerHTML += `<li>${number}</li>`;
// })
