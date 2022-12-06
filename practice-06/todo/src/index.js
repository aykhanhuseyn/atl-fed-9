import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoContext } from 'context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TodoContext>
		<App />
	</TodoContext>
);
