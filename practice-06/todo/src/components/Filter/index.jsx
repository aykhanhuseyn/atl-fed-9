import React, { useContext } from 'react';
import { Todo } from 'context';
import { FilterState } from 'data';
import style from './filter.module.scss';

export const Filter = () => {
	const { todos, filterState, filterTodos, clearCompletedTodos } =
		useContext(Todo);

	return (
		<div className={style.filter}>
			<h3 className={style.filter__text}>
				{todos.reduce((acc, curr) => acc + !curr.done, 0)} items left
			</h3>
			<div className={style.filter__groupBtn}>
				<button
					className={
						filterState === FilterState.ALL
							? style['filter__groupBtn__buttons--active']
							: style.filter__groupBtn__buttons
					}
					onClick={() => {
						filterTodos(FilterState.ALL);
					}}
				>
					All
				</button>
				<button
					className={
						filterState === FilterState.ACTIVE
							? style['filter__groupBtn__buttons--active']
							: style.filter__groupBtn__buttons
					}
					onClick={() => {
						filterTodos(FilterState.ACTIVE);
					}}
				>
					Active
				</button>
				<button
					className={
						filterState === FilterState.COMPLETED
							? style['filter__groupBtn__buttons--active']
							: style.filter__groupBtn__buttons
					}
					onClick={() => {
						filterTodos(FilterState.COMPLETED);
					}}
				>
					Completed
				</button>
			</div>
			<button className={style.filter__clearBtn} onClick={clearCompletedTodos}>
				Clear Completed
			</button>
		</div>
	);
};
