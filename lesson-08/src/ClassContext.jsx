import React, { Component } from 'react';
import { Theme } from './context';

export class ClassContext extends Component {
	static contextType = Theme;

	render() {
		return <div>ClassContext theme {this?.context?.theme}</div>;
	}
}

export default ClassContext;
