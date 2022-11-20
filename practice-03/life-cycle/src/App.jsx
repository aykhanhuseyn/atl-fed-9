import { useState } from 'react';
import { Cls, Func } from './components';
import './App.css';

// React.createElement('input') ==> <input />
// React.createElement('input', { key: 1 }) ==> <input key={1} />

function App() {
	const [count, setCount] = useState(0);

	console.log('====================================');
	console.log('APP COMPONENT');
	console.log('====================================');

	return (
		<div className='App'>
			<button
				onClick={() => {
					setCount((x) => x + 1);
				}}
			>
				RERENDER APP {count}
			</button>
			<br />
			{/* <Cls key={count} name='hello' /> */}
			{count % 2 === 0 && <Func name='hello' />}
		</div>
	);
}

export default App;
