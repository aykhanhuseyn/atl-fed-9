import { useReducer } from 'react';

export function useReducerWithThunk(reducer, initialState) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const customDispatch = (action) => {
		if (typeof action === 'function') {
			action(customDispatch);
		} else {
			dispatch(action);
		}
	};

	return [state, customDispatch];
}
