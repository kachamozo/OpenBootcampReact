/**
 * Ejemplo de uso del mentodo componentWillUnMount para un componente clase
 * y usoo del hook para componente funcional
 * (Cuando el componente va desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
	componentWillUnmount() {
		console.log('Comportamiento antes que el componente desaparezca');
	}
	render() {
		return (
			<div>
				<h1>WillUnMount</h1>
			</div>
		);
	}
}

export function WillUnMountHook() {
	useEffect(() => {
		//aqui no ponemos nada

		return () => {
			console.log('Comportamiento antes que el componente desaparezca');
		};
	}, []);

	return (
		<div>
			<h1>WillUnMountHook</h1>
		</div>
	);
}
