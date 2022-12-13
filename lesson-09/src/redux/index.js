import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './counter';
import currency from './currency';

const reducers = combineReducers({
	counter,
	currency,
});

const store = configureStore({
	reducer: reducers,
	devTools: true,
});

export default store;
