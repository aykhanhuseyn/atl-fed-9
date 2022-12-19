import { useDispatch, useSelector } from 'react-redux';
import {
	isAuthenticatedSelector,
	isLoadingSelector,
	loginThunk,
	logoutThunk,
	nameSelector,
} from './redux/auth';
import api from './redux/api';
import './App.css';

function App() {
	const { data, isLoading: isL } = api.useGetUsersQuery();
	const [getUserByID, { data: ud }] = api.useLazyGetUserQuery();

	console.log({ data, isL });

	const dispatch = useDispatch();
	const userName = useSelector((state) => state.auth.name);
	const name = useSelector(nameSelector);
	const isLoading = useSelector(isLoadingSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	return (
		<div className='App'>
			<h1>Vite + React</h1>
			<div className='card'>
				{isLoading ? (
					<h1>Loading...</h1>
				) : isAuthenticated ? (
					<div>
						<h2>Welcome {userName}!</h2>
						<p>hemise sen gelesen!</p>
						<button
							onClick={() => {
								dispatch(logoutThunk());
							}}
						>
							log out
						</button>
					</div>
				) : (
					<button
						onClick={() => {
							dispatch(loginThunk({ username: 'john', password: '1234' }));
						}}
					>
						log in
					</button>
				)}
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<ul>
				{data?.map(({ id, name }) => (
					<li
						key={id}
						onClick={() => {
							getUserByID(id);
						}}
					>
						{name}
					</li>
				))}
			</ul>
			<h2>
				{ud?.name} {ud?.email}
			</h2>
		</div>
	);
}

export default App;
