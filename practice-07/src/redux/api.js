import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => 'users',
		}),
		getUser: builder.query({
			query: (id) => `users/${id}`,
			keepUnusedDataFor: 600,
		}),
	}),
});

export default api;
