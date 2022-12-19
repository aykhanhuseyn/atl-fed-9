import { useDispatch, useSelector } from 'react-redux';
import {
	countSelector,
	incrementByOne,
	decrementByOne,
	incrementByTwo,
	setCont,
} from './redux/counter';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const count = useSelector(countSelector);

	return (
		<div className='App'>
			<h1>Vite + React</h1>
			<div className='card'>
				<h1>coount is {count}</h1>
				<input
					type='number'
					onKeyUp={(e) => {
						if (e.key === 'Enter') {
							dispatch(setCont(e.target.valueAsNumber));
						}
					}}
				/>
				<button
					onClick={() => {
						dispatch(incrementByTwo());
					}}
				>
					increment
				</button>
				<br />
				<button
					onClick={() => {
						dispatch(decrementByOne());
					}}
				>
					decrement
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
