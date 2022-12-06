import { useState, createContext } from 'react';
import { find, cloneDeep, filter, uniqueId, keys } from 'lodash';
import { initialTodos, FilterState } from 'data';

export const Todo = createContext({});

export const TodoContext = ({ children }) => {
	const [todos, setTodos] = useState(initialTodos);
	const [filterState, setFilter] = useState(FilterState.ALL);

	// toggle done property of given todo
	const toggle = (id) => {
		setTodos((prev) => {
			const clone = cloneDeep(prev);
			const found = find(clone, (t) => t.id === id);
			if (found) found.done = !found.done;
			return clone;
		});
	};

	// removes given todo
	const remove = (id) => {
		setTodos((prev) => {
			const clone = cloneDeep(prev);
			const filtered = filter(clone, (t) => t.id !== id);
			return filtered;
		});
	};

	// add todo
	const add = (title, done) => {
		setTodos((prev) => {
			const newTodo = {
				id: uniqueId(),
				title: title,
				done: done,
			};
			return [...prev, newTodo];
		});
	};

	// clears if done == true
	const clearCompleted = () => {
		setTodos((prev) => prev.filter((todo) => !todo.done));
	};

	// set filter state
	const filterTodos = (filterMethod) => {
		if (keys(FilterState).includes(filterMethod)) {
			setFilter(filterMethod);
		}
	};

	return (
		<Todo.Provider
			value={{
				todos,
				filterState,
				toggle,
				remove,
				add,
				clearCompleted,
				filterTodos,
			}}
		>
			{children}
		</Todo.Provider>
	);
};
