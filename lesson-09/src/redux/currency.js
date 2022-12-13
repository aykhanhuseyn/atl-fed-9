import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { map, pick } from 'lodash';
import api from '../api';

const initialState = {
	currencies: [],
	loading: false,
};

export const getSupportedCurrencies = createAsyncThunk(
	'supported-currencies',
	async () => {
		const { data } = await api.get('supported-currencies');
		return map(data, (item) =>
			pick(item, ['currencyCode', 'currencyName', 'icon', 'status']),
		);
	},
);

const currency = createSlice({
	name: 'currency',
	initialState,
	reducers: {},
	extraReducers: {
		[getSupportedCurrencies.pending]: (state) => {
			state.loading = true;
		},
		[getSupportedCurrencies.fulfilled]: (state, action) => {
			state.currencies = action.payload;
			state.loading = false;
		},
		[getSupportedCurrencies.rejected]: (state) => {
			state.currencies = [];
			state.loading = false;
		},
	},
});

const {} = currency.actions;

export const currenciesSelector = (state) => state.currency.currencies;

export default currency.reducer;

// supported-currencies
// currency-symbols
// latest

// "currencyCode": "XAG",
// "currencyName": "Silver (troy ounce)",
// "icon": "https://currencyfreaks.com/photos/flags/xag.png",
// "status": "available",
