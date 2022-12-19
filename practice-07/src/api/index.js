const tokenAlg = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';
const tokenSign = 'OOlN3JerE4MuGhZewdOQj-aA8HpjvODQajKNguSISwo';

const data = {
	sub: '1234567890',
	name: 'John Doe',
	admin: true,
	iat: Date.now(), // timespan
	exp: Date.now() + 1000 * 60 * 60 * 2,
};

const encriptedData = btoa(JSON.stringify(data));

const TOKEN = [tokenAlg, encriptedData, tokenSign].join('.');

export function LogIn({ username, password }) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'john' && password === '1234') {
				resolve({ token: TOKEN, refresh: Date.now() });
			} else {
				reject({ status: 401, error: 'username or paaassword are incorrect' });
			}
		}, 1000);
	});
}

export function LogOut() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ done: true });
		}, 500);
	});
}
