import React from 'react';
import { Checkbox } from '../Checkbox';
import style from './todoItem.module.scss';
import pt from 'prop-types';

export const TodoItem = ({ title, done = false, toggle, remove }) => {
	return (
		<div className={style.item} data-checked={done}>
			<Checkbox checked={done} onClick={toggle} />
			<h2 className={style.item__title}>{title}</h2>
			<button className={style.item__delete} onClick={remove}>
				<img src='/assets/icon-cross.svg' alt='icon cross' />
			</button>
		</div>
	);
};

TodoItem.propTypes = {
	title: pt.string.isRequired,
	done: pt.bool,
	toggle: pt.func.isRequired,
};
