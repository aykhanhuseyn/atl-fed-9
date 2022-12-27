import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i); // /RegExp/i (case) insensitive
	console.log({ screen });
	expect(linkElement).toBeInTheDocument();

	const linkElementText = screen.getByText('Hello World'); // text
	expect(linkElementText).toBeInTheDocument();
});
