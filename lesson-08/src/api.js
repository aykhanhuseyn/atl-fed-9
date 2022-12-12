const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export function LogIn() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(TOKEN);
		}, 1000);
	});
}

export function LogOut() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(null);
		}, 500);
	});
}
