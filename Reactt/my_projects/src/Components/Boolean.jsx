
import React, { Component } from 'react';

class Boolean extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: true
		};
	}

	toggleVisibility = () => {
		this.setState(prevState => ({ isVisible: !prevState.isVisible }));
	}

	render() {
		return (
			<div style={{ textAlign: 'center', marginTop: '40px' }}>
				<button onClick={this.toggleVisibility} style={{ marginBottom: '20px' }}>
					{this.state.isVisible ? 'Hide' : 'Show'} Message
				</button>
				{this.state.isVisible && (
					<p style={{ fontSize: '1.5rem' }}>Welcome to React</p>
				)}
			</div>
		);
	}
}

export default Boolean;
