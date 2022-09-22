import React, { useState } from 'react';

//Definiendo estilos constantes
// ?Estilo para ussuario logueado
const loggedStyle = {
	color: 'white',
};

// ?Estilo para usuario no logueado
const unloggedStyle = {
	color: 'tomato',
	fontWeight: 'bold',
};

function SaludoStyle(props) {
	/**
	 * Generamos un estado para el componente y asi controlar si el usuario esta o no logueado
	 */

	const [logged, setLogged] = useState(false);
	return (
		<div style={logged ? loggedStyle : unloggedStyle}>
			{logged ? <h5>Hola, {props.name}</h5> : <h5>Please Login</h5>}
			<button
				onClick={() => {
					console.log('Boton pulsado');
					setLogged(!logged);
				}}
			>
				{logged ? 'Logout' : 'Login'}
			</button>
		</div>
	);
}

export default SaludoStyle;
