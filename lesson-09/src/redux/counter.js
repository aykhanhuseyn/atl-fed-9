import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
	hasChanged: false,
	hasReset: false,
};

const counter = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increase: (state) => {
			state.count += 1;
		},
		decrease: (state) => {
			state.count -= 1;
		},
		change: (state, action) => {
			if (typeof action.payload === 'number') {
				state.count = action.payload;
			}
		},
		reset: () => {
			return { ...initialState };
		},
		// setState: (state, action) => {},
	},
});

export const { change, decrease, increase, reset } = counter.actions;

export const counterSelector = (state) => state.counter.count;
export const hasChangedSelector = (state) => state.counter.hasChanged;
export const hasResetSelector = (state) => state.counter.hasReset;

export default counter.reducer;
