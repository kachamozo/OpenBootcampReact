import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SaludoF(props) {
	const [age, setAge] = useState(29);

	const cumple = () => {
		setAge(age + 1);
	};
	return (
		<div>
			<h1>Hola desde un componente funcional {props.name}</h1>
			<h2>Tu edad es:{age} </h2>
			<div>
				<button onClick={cumple}>Cumplir años</button>
			</div>
		</div>
	);
}
SaludoF.propTypes = {
	name: PropTypes.string,
};

export default SaludoF;
