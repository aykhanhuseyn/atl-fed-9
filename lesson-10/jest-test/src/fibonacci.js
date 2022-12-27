const fibo = [0, 1];
// 0 1 1 2 3 5 8

export function fibonacci(number) {
	if (typeof fibo[number] == 'number') return fibo[number];

	for (let i = 1; i <= number; i++) {
		if (fibo[i]) {
			continue;
		} else {
			fibo[i] = fibo[i - 1] + fibo[i - 2];
		}
	}

	return fibo[number];
}


