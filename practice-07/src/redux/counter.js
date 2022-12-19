// 1. import
import { createSlice } from '@reduxjs/toolkit';

// 2. create slice
const counter = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		incrementByOne: (state) => {
			state.count += 1;
		},
		incrementByTwo: (state) => {
			state.count = Math.floor(Math.random() * 1_000_000);
		},
		decrementByOne: (state) => {
			state.count -= 1;
		},
		setCont: (state, action) => {
			if (typeof action.payload == 'number') {
				state.count = action.payload;
			}
		},
	},
});

// 3. export actions
export const { incrementByOne, decrementByOne, incrementByTwo, setCont } =
	counter.actions;

// 4. create selectors
export const countSelector = (state) => state.counter.count;

// 5. default export reducer
export default counter.reducer;
