import { useState } from 'react';
import { TodoList, Header, Filter, TodoCreate } from 'components';

function App() {
	const [isDark] = useState(true);

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<div className='container'>
				<Header />
				<TodoCreate />
				<TodoList />
				<Filter />
			</div>
		</div>
	);
}

export default App;
