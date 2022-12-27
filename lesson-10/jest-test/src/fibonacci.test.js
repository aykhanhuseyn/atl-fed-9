// TEST DRIVEN DEVELOPMENT
// TDD

import { fibonacci } from './fibonacci';

test('DRIVEN DEVELOPMENT', () => {
	expect(fibonacci(0)).toBe(0);

	expect(fibonacci(1)).toBe(1);

	expect(fibonacci(2)).toBe(1);

	expect(fibonacci(3)).toBe(2);

	expect(fibonacci(4)).toBe(3);

	// expect(fibonacci(-1)).toBe(null);

	// expect(fibonacci(1)).toBe(0);

	expect(fibonacci(2 ** 12)).toBe(Infinity);

	// expect(fibonacci(2 ** 12)).toBe(Infinity);
});

// 5
// 0, 1, 1, 2, 3, 5, 8, 13, 21...
