import axios from 'axios';
import { BASE_URL, API_KEY } from '../secrets';

const api = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {
		apikey: API_KEY,
		format: 'json',
	},
});

export default api;

// api.get('currencies');
// https://api.currencyfreaks.com/currencies?apikey=644bef2164934b438028eca858cd4768&format=json

// api.interceptors.request.use((config) => {
//   config.params = {
//     ...config.params,
//     apikey: 'YOUR_APIKEY',
//     format: 'xml',
//   }
//   return config;
// })

// api.interceptors.response.use((success) => {}, (error) => {
//   error.status=== 401
// });
