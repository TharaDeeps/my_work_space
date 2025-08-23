
import React, { Component } from 'react';

class Password extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			password: ''
		};
	}

	handleChange = (e) => {
		this.setState({ password: e.target.value });
	}

	toggleShowPassword = () => {
		this.setState(prevState => ({ showPassword: !prevState.showPassword }));
	}

	render() {
		return (
			<div style={{ textAlign: 'center', marginTop: '40px' }}>
				<input
					type={this.state.showPassword ? 'text' : 'password'}
					value={this.state.password}
					onChange={this.handleChange}
					placeholder="Enter password"
					style={{ fontSize: '1rem', padding: '8px', marginRight: '10px' }}
				/>
				<button onClick={this.toggleShowPassword} style={{ fontSize: '1rem', padding: '8px' }}>
					{this.state.showPassword ? 'Hide' : 'Show'} Password
				</button>
			</div>
		);
	}
}

export default Password;
