/* Ejemplo del uso del useState
Crear un componente de tipo funcion y acceder a su estado privado a traves de un hook y ademas poder modificarlo 
*/

import React, { useState } from 'react';

function Ejemplo1() {
	// valor inicial par aun contador
	const valorInicial = 0;

	// valor inicial para una persona
	const personaInicial = {
		nombre: 'Roly',
		email: 'cachamocito@yahoo.com',
	};

	/**Queremos que VALORINICIAL Y PERSONAINICIAL sean
	 * parte del estado del componente para asi poder gesionar su cambio
	 * y que este se vea reflejado en la vista del componente
	 *
	 * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
	 */

	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/**
	 * Funcion para cambiar el estado privado que tiene el contador */
	const incremetarContador = () => {
		// ? funcionParaCAmbiar(nuevoValor)
		setContador(contador + 1);
	};

	/**
	 * funcion para actualizar el estado de persona en el componente
	 */
	const actualizarPersona = () => {
		persona.nombre === 'Roly'
			? setPersona({
					nombre: 'Gonzalo',
					email: 'chalo@yahoo.com',
			  })
			: setPersona(personaInicial);
	};
	return (
		<div>
			<h1>***Ejemplo de useState()***</h1>
			<h2>CONTADOR: {contador}</h2>
			<h2>DATOS DE LA PERSONA:</h2>
			<h3>NOMBRE: {persona.nombre}</h3>
			<h3>EMAIL: {persona.email}</h3>
			{/* Bolque de botones para actualizar estados del componente */}
			<button onClick={incremetarContador}>Incrementar Contador</button>
			<button onClick={actualizarPersona}>Actualizar Persona </button>
		</div>
	);
}

export default Ejemplo1;
