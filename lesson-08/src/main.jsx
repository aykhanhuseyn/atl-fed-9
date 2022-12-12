import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContext, AuthContext } from './context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeContext>
		<AuthContext>
			<App />
		</AuthContext>
	</ThemeContext>
);
