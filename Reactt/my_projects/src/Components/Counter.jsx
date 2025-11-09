import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	increment = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }));
	}

	decrement = () => {
		this.setState(prevState => ({ count: prevState.count - 1 }));
	}

	reset = () => {
		this.setState({ count: 0 });
	}

	render() {
		return (
			<div style={{ textAlign: 'center', marginTop: '40px' }}>
				<h2>Counter App</h2>
				<p style={{ fontSize: '2rem' }}>{this.state.count}</p>
				<button onClick={this.increment} style={{ margin: '5px' }}>Increment</button>
				<button onClick={this.decrement} style={{ margin: '5px' }}>Decrement</button>
				<button onClick={this.reset} style={{ margin: '5px' }}>Reset</button>
			</div>
		);
	}
}

export default Counter;
