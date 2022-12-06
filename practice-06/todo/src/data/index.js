import { uniqueId } from 'lodash';

export const initialTodos = [
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

export const FilterState = {
	ALL: 'ALL',
	COMPLETED: 'COMPLETED',
	ACTIVE: 'ACTIVE',
};
