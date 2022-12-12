import {
	cloneElement,
	useEffect,
	useContext,
	useState,
	createContext,
} from 'react';

export const Theme = createContext({});

// enum
export const ThemeMode = Object.freeze({
	LIGHT: 'light',
	DARK: 'dark',
});

// provider
export const ThemeContext = ({ children }) => {
	// shared state
	const [theme, setTheme] = useState(ThemeMode.LIGHT);

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	// state manipulation functions
	const setDark = () => {
		setTheme(ThemeMode.DARK);
	};

	const setLight = () => {
		setTheme(ThemeMode.LIGHT);
	};

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
		);
	};

	return (
		<Theme.Provider value={{ theme, setDark, setLight, toggleTheme }}>
			{children}
		</Theme.Provider>
	);
};

export const useTheme = () => useContext(Theme);

export const ThemeConsumer = ({ children }) => (
	<Theme.Consumer children={(context) => cloneElement(children, context)} />
);

export const withContext = (Child) => (props) =>
	(
		<Theme.Consumer>
			{(context) => <Child {...props} {...context} />}
		</Theme.Consumer>
	);
