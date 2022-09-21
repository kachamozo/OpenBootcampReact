/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 *
 * @returns Componente 1
 * Dispone de un contexto que va tener un valor que recibe desde el padre
 */

// Inicializamos un estado vacio que va rellenarse
// con los datos del contexto del padre
const miContexto = React.createContext(null);

function Componente1() {
	const state = useContext(miContexto);

	return (
		<div>
			<h1>El Token es: {state.token}</h1>
			{/* Pinamos el componente 2 */}
			<Componente2 />
		</div>
	);
}

function Componente2() {
	const state = useContext(miContexto);
	return (
		<div>
			<h2>La sesion es: {state.sesion}</h2>
		</div>
	);
}

function MiComponenteConContexto() {
	const estadoInicial = {
		token: '1234567',
		sesion: 1,
	};

	// Creamos el estado del componente
	const [sesionData, setSesionData] = useState(estadoInicial);

	const actualizarSesion = () => {
		setSesionData({
			token: 'JWT12345',
			sesion: sesionData.sesion + 1,
		});
	};
	return (
		<miContexto.Provider value={sesionData}>
			<h1>***Ejemplo de useState() y useContext()</h1>
			<Componente1 />
			<button onClick={actualizarSesion}>Actualizar Sesion</button>
		</miContexto.Provider>
	);
}

export default MiComponenteConContexto;
