import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counter from './counter';
import auth from './auth';
import api from './api';

const reducer = combineReducers({
	counter,
	auth,
	[api.reducerPath]: api.reducer,
});

const store = configureStore({
	reducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export default store;
