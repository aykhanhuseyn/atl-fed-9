const hello = React.createElement(
	'div',
	{
		className: 'container',
		style: {
			backgroundColor: 'rebeccapurple',
			color: '#efefef',
		},
	},
	React.createElement('h1', {}, 'hello world!'),
	React.createElement('span', {}, "hello world, i'm react!")
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(hello);
