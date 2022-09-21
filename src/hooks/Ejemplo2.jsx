/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useEffect, useRef } from 'react';

function Ejemplo2() {
	/**
	 * Vamos a crear dos contadores distintos
	 * cada uno en un estado diferente
	 */

	const [contador1, setContador1] = useState(0);
	const [contador2, setContador2] = useState(0);

	/**
	 * Vamos a crear una referencia con useRef()
	 * para asociar una variable con un elemento del DOM del componente (vista HTML)
	 * se ve en la consola del navegador
	 */

	const miRef = useRef();

	/**
	 * Funciones para cambiar los estados
	 */

	const incrementar1 = () => {
		setContador1(contador1 + 1);
	};

	const incrementar2 = () => {
		setContador2(contador2 + 1);
	};

	/**
	 * Trabajando con useEffect()
	 * ? Caso 1: Ejecutar siempre un snippet de codigo
	 * Cada vez que haya un cambio en el estado del componente
	 * se ejecuta aquello que este dentro del useEffect()
	 */

	// useEffect(() => {
	// 	console.log('Cambio en el estado del componente');
	// 	console.log('Mostrando referencia al elemento DOM');
	// 	console.log(miRef);
	// });

	/**
	 * Trabajando con useEffect()
	 * ? Caso 2: Ejecutar solo cuando cambie el CONTADOR 1
	 * Cada vez que haya un cambio en el contador 1
	 * se ejecuta aquello que este dentro del useEffect()
	 */

	// useEffect(() => {
	// 	console.log('Cambio en el estado del CONATDOR 1');
	// 	console.log('Mostrando referencia al elemento DOM');
	// 	console.log(miRef);
	// }, [contador1]);

	/**
	 * Trabajando con useEffect()
	 * ? Caso : Ejecutar solo cuando cambie el CONTADOR 1 o CONTADOR 2
	 * Cada vez que haya un cambio en el contador 1 o contador 2
	 * se ejecuta aquello que este dentro del useEffect()
	 */

	useEffect(() => {
		console.log('Cambio en el estado del CONATDOR 1 / CONTADOR 2');
		console.log('Mostrando referencia al elemento DOM');
		console.log(miRef);
	}, [contador1, contador2]);

	return (
		<div>
			<h1>***Ejemplo de useState(), useEffect(), useRef()</h1>
			<h2>CONTADOR 1: {contador1}</h2>
			<h2>CONTADOR 2: {contador2}</h2>
			{/* Elemento referenciado */}
			<h3 ref={miRef}>Ejemplo de elemento referenciado</h3>
			{/* Botones para cambiar contadores */}
			<div>
				<button onClick={incrementar1}>Incrementar contador 1</button>
				<button onClick={incrementar2}>Incrementar contador 2</button>
			</div>
		</div>
	);
}

export default Ejemplo2;
