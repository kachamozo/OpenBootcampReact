import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Saludo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 29,
		};
	}

	cumple = () => {
		this.setState((prevState) => ({ age: prevState.age + 1 }));
	};

	render() {
		return (
			<div>
				<h1>Hola {this.props.name}</h1>
				<h2>Tu edad es:{this.state.age} </h2>
				<div>
					<button onClick={this.cumple}>Cumplir años</button>
				</div>
			</div>
		);
	}
}

Saludo.propTypes = {
	name: PropTypes.string,
};

export default Saludo;
