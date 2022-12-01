import { useState } from 'react';
import { Checkbox } from '../Checkbox';
import styles from './todoCreate.module.scss';

export const TodoCreate = ({ add }) => {
	const [done, setDone] = useState(false);
	const [title, setTitle] = useState('');

	return (
		<div className={styles.create}>
			<Checkbox
				checked={done}
				onClick={() => {
					setDone((prev) => !prev);
				}}
			/>
			<input
				type='text'
				value={title}
				className={styles.create__input}
				placeholder='Create a todo...'
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
