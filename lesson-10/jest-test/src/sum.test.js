import sum from './sum';

test('testing sum function', () => {
	expect(sum()).toBe(NaN);

	expect(sum(1, 3)).toBe(4);
});
