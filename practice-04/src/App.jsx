import { useState } from 'react';
import { find, map, cloneDeep, filter, uniqueId } from 'lodash';
import { TodoItem } from './components/TodoItem';
import { TodoCreate } from './components/TodoCreate';

const initialTodos = [
	{
		id: uniqueId(),
		title: 'salam',
		done: true,
	},
	{
		id: uniqueId(),
		title: 'sag ol',
		done: false,
	},
	{
		id: uniqueId(),
		title: 'sag olma',
		done: false,
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);

	const toggle = (id) => {
		setTodos((prev) => {
			// debugger;
			const clone = cloneDeep(prev);
			const found = find(clone, (t) => t.id === id);
			if (found) found.done = !found.done;
			return clone;
		});
	};

	const remove = (id) => {
		setTodos((prev) => {
			// debugger;
			const clone = cloneDeep(prev);
			const filtered = filter(clone, (t) => t.id !== id);
			return filtered;
		});
	};

	const edit = () => {};

	const view = () => {};

	const add = (title, done) => {
		setTodos((oldTodos) => {
			const newTodo = {
				id: uniqueId(),
				title: title,
				done: done,
			};
			return [...oldTodos, newTodo];
		});
	};

	return (
		<div>
			<TodoCreate add={add} />
			{map(todos, ({ id, title, done }) => (
				<TodoItem
					key={id}
					title={title}
					done={done}
					toggle={() => toggle(id)}
					remove={() => remove(id)}
				/>
			))}
		</div>
	);
}

export default App;
