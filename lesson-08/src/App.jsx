import { useTheme, ThemeConsumer, useAuth } from './context';
import ConsumerApp from './ConsumerApp';
import ClassContext from './ClassContext';
import WithCtx from './WithCtx';
import { Loading } from './Loading';

function App() {
	const { theme, setLight, setDark, toggleTheme } = useTheme();
	const { state, action, dispatch } = useAuth();

	console.log({ state, action, dispatch });

	if (state.loading) return <Loading />;

	return (
		<div className={theme}>
			<h1>AUTH</h1>
			{state.token ? (
				<div>
					<span>dashboard</span>
					<button
						onClick={() => {
							dispatch(action.loading(true));
							dispatch(action.logout());
						}}
					>
						log me out
					</button>
				</div>
			) : (
				<div>
					<button
						onClick={() => {
							dispatch(action.loading(true));
							dispatch(action.login({ username: 'ayxan', password: '1234' }));
						}}
					>
						log me in
					</button>
				</div>
			)}

			<hr />

			<div>
				<button
					onClick={() => {
						setDark();
					}}
				>
					set dark
				</button>
				<button
					onClick={() => {
						setLight();
					}}
				>
					set light
				</button>
				<button
					onClick={() => {
						toggleTheme();
					}}
				>
					toggle theme
				</button>
				<h1>consumer here</h1>
				<ThemeConsumer>
					<ConsumerApp age={45} />
				</ThemeConsumer>
				<ClassContext />
				<WithCtx name='with context' theme='salam' ajskdhkas={'sdf'} />
			</div>
		</div>
	);
}

export default App;
