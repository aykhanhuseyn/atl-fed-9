import React, { Component } from 'react';

export class Cls extends Component {
	constructor() {
		console.log('====================================');
		console.log('constructor');
		console.log(Date.now());
		console.log('====================================');

		super();

		this.state = {
			count: 0,
		};
	}

	// getderived

	componentDidMount() {
		console.log('====================================');
		console.log('componentDidMount');
		console.log(Date.now());
		console.log('====================================');
	}

	componentDidUpdate() {
		console.log('====================================');
		console.log('componentDidUpdate');
		console.log(Date.now());
		console.log('====================================');
	}

	componentWillUnmount() {
		console.log('====================================');
		console.log('componentWillUnmount');
		console.log(Date.now());
		console.log('====================================');
	}

	shouldComponentUpdate(newProp, newState) {
		console.log('====================================');
		console.log('shouldComponentUpdate');
		console.log({ newProp, newState });
		console.log(Date.now());
		console.log('====================================');

		// return this.state.count < newState.count;
		return true;
	}

	render() {
		console.log('====================================');
		console.log('render');
		console.log(Date.now());
		console.log('====================================');
		return (
			<div>
				<h1>Cls</h1>
				<h3>count: {this.state.count}</h3>
				<button
					onClick={() => {
						this.setState({ count: Math.round(Math.random() * 100) });
					}}
				>
					update
				</button>
			</div>
		);
	}
}
