import React, { useContext, useState } from 'react';
import { Todo } from 'context';
import { Checkbox } from 'components/Checkbox';
import style from './todoCreate.module.scss';

export const TodoCreate = () => {
	const [done, setDone] = useState(false);
	const [title, setTitle] = useState('');

	const { add } = useContext(Todo);

	return (
		<div className={style.create}>
			<Checkbox
				checked={done}
				onClick={() => {
					setDone((prev) => !prev);
				}}
			/>
			<input
				type='text'
				className={style.create__input}
				value={title}
				placeholder='Create a new todo…'
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.code === 'Enter') {
						add(title, done);
						setDone(false);
						setTitle('');
					}
				}}
			/>
		</div>
	);
};
