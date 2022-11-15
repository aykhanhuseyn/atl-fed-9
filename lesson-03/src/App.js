import { ClassComponent } from './components/CLS';
import { Expression, Declaration, Arrow } from './components/FC';
import { Stateful } from './components/Stateful';

function App() {
	return (
		<div className='App'>
			<Expression />
			<Declaration />
			<Arrow />
			<ClassComponent />
			<Stateful />
		</div>
	);
}

export default App;
