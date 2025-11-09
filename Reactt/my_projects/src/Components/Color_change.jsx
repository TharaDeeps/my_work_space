
import React, { Component } from 'react';

class Color_change extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: 'white'
		};
	}

	setColor = (color) => {
		this.setState({ bgColor: color });
	}

	render() {
		return (
			<div style={{ textAlign: 'center', marginTop: '40px' }}>
				<h2>Color Changer</h2>
				<div
					style={{
						backgroundColor: this.state.bgColor,
						width: '200px',
						height: '100px',
						margin: '0 auto 20px',
						border: '1px solid #ccc',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '1.2rem'
					}}
				>
					{this.state.bgColor.charAt(0).toUpperCase() + this.state.bgColor.slice(1)}
				</div>
				<button onClick={() => this.setColor('red')} style={{ margin: '5px' }}>Red</button>
				<button onClick={() => this.setColor('blue')} style={{ margin: '5px' }}>Blue</button>
				<button onClick={() => this.setColor('green')} style={{ margin: '5px' }}>Green</button>
				<button onClick={() => this.setColor('white')} style={{ margin: '5px' }}>White</button>
			</div>
		);
	}
}

export default Color_change;
