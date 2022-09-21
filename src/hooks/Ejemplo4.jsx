/**
 * Ejemplo para entender el suo de props.children
 */

import React from 'react';

function Ejemplo4(props) {
	return (
		<div>
			<h1>***Ejemplo de CHILDREN.PROPS***</h1>
			<h2>NOMBRE: {props.nombre}</h2>
			{/* props.children pintara por defecto aquello que se encuentre entre las etiquetas 
      de apertura y cierre de este componente desde un componente de orden superior */}
			{props.children}
		</div>
	);
}

export default Ejemplo4;
