
import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			submitted: false
		};
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ submitted: true });
	}

	render() {
		return (
			<div style={{ margin: '30px auto', maxWidth: '300px', textAlign: 'left', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
				<h2>Login Form</h2>
				<form onSubmit={this.handleSubmit}>
					<div style={{ marginBottom: '10px' }}>
						<label>Username:</label><br />
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
							style={{ width: '100%', padding: '8px' }}
							required
						/>
					</div>
					<div style={{ marginBottom: '10px' }}>
						<label>Password:</label><br />
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							style={{ width: '100%', padding: '8px' }}
							required
						/>
					</div>
					<button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
				</form>
				{this.state.submitted && (
					<div style={{ marginTop: '20px', background: '#f9f9f9', padding: '10px', borderRadius: '6px' }}>
						<strong>Entered Values:</strong>
						<p>Username: {this.state.username}</p>
						<p>Password: {this.state.password}</p>
					</div>
				)}
			</div>
		);
	}
}

export default Login;
