import { useDispatch, useSelector } from 'react-redux';
import {
	increase,
	decrease,
	change,
	reset,
	counterSelector,
} from './redux/counter';
import { getSupportedCurrencies, currenciesSelector } from './redux/currency';
import './App.css';
import { map } from 'lodash';

function App() {
	const dispatch = useDispatch();
	const count = useSelector(counterSelector);
	const currencies = useSelector(currenciesSelector);

	return (
		<div className='App'>
			<h1>Vite + React</h1>
			<div className='card'>
				<button
					onClick={() => {
						dispatch(getSupportedCurrencies());
					}}
				>
					count is {count}
				</button>
				<button
					onClick={() => {
						dispatch(increase());
					}}
				>
					increase
				</button>
				<button
					onClick={() => {
						dispatch(decrease());
					}}
				>
					decrease
				</button>
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					reset
				</button>
				<button
					onClick={() => {
						dispatch(change(55));
					}}
				>
					change
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<ul>
				{map(currencies, ({ currencyCode }) => (
					<li key={currencyCode}>{currencyCode}</li>
				))}
			</ul>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
