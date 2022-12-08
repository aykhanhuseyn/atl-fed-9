import { Button, View, Title } from './components/shared';
import './App.css';

function App() {
	return (
		<div
			style={{
				display: 'grid',
				gap: '24px',
				gridTemplateColumns: '300px auto',
			}}
		>
			<div
				style={{
					display: 'grid',
					gap: '24px',
				}}
			>
				<View type='primary'>
					<Title as='h1' level='2'>
						Hello
					</Title>
				</View>
				<View>
					<Title as='h1' level='2'>
						Hello
					</Title>
				</View>
				<View>
					<Title as='h1' level='2'>
						Hello
					</Title>
				</View>
			</div>
			<div
				style={{
					display: 'grid',
					gap: '24px',
				}}
			>
				<View type='gray'>
					<Title as='h1' level='2'>
						Hello
					</Title>
				</View>
				<View>
					<Title as='h1' level='2'>
						Hello
					</Title>
				</View>
			</div>
		</div>
	);
}

export default App;
