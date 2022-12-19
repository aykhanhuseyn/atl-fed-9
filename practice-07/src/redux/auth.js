import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import decode from 'jwt-decode';
import { LogIn, LogOut } from '../api';

export const loginThunk = createAsyncThunk('auth/login', async (payload) => {
	const data = await LogIn(payload);
	return data;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
	const data = await LogOut();
	return data;
});

const authState = {
	token: null,
	refreshToken: null,
	userName: null,
	admin: false,
	exp: null,
	loading: false,
};

// TWO TOKENS
// login token => exp
// refresh token
const auth = createSlice({
	name: 'auth',
	initialState: authState,
	reducers: {},
	// extraReducers: (builder) => builder
	//   .addCase(loginThunk.pending, (state, action) => {})
	//   .addCase(loginThunk.fulfilled, (state, action) => {})
	//   .addCase(loginThunk.rejected, (state, action) => {})
	extraReducers: {
		[loginThunk.pending]: (state) => {
			state.loading = true;
		},
		[loginThunk.fulfilled]: (state, action) => {
			state.loading = false;
			state.token = action.payload.token;
			state.refreshToken = action.payload.refresh;

			const decoded = decode(action.payload.token);
			state.name = decoded.name;
			state.admin = decoded.admin;
			state.exp = decoded.exp;
		},
		[loginThunk.rejected]: () => {
			return authState;
		},

		[logoutThunk.pending]: (state) => {
			state.loading = true;
		},
		[logoutThunk.fulfilled]: () => {
			return authState;
		},
		[logoutThunk.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const {} = auth.actions;

export const isAuthenticatedSelector = (state) => Boolean(state.auth.token);
export const isLoadingSelector = (state) => Boolean(state.auth.loading);
export const nameSelector = (state) => Boolean(state.auth.userName);

export default auth.reducer;
