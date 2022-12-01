import pt from 'prop-types';
import styles from './todoItem.module.scss';
import { Checkbox } from '../Checkbox';

export const TodoItem = ({ done = false, title, toggle, remove }) => {
	return (
		<div className={styles.item} data-checked={done}>
			<Checkbox checked={done} onClick={toggle} />
			<h2 className={styles.item__title}>{title}</h2>
			<button className={styles.item__delete} onClick={remove}>
				<img src='/assets/icon-cross.svg' alt='icon cross' />
			</button>
		</div>
	);
};

TodoItem.propTypes = {
	done: pt.bool,
	title: pt.string.isRequired,
	toggle: pt.func.isRequired,
	remove: pt.func.isRequired,
};
