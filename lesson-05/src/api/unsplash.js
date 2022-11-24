import { createApi } from 'unsplash-js';
import { UNSPLASH_API_KEY } from '../constants';

export const unsplash = createApi({
	accessKey: UNSPLASH_API_KEY,
});
