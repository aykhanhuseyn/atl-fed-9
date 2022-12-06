import React from 'react';
import pt from 'prop-types';
import style from './checkbox.module.scss';

export const Checkbox = ({ checked, onClick }) => {
	return (
		<div className={style.checkbox}>
			<div
				className={style.checkbox__check}
				data-checked={checked}
				onClick={onClick}
			></div>
		</div>
	);
};

Checkbox.propTypes = {
	checked: pt.bool.isRequired,
	onClick: pt.func.isRequired,
};
