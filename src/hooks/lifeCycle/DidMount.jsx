/**
 * Ejemplo de uso del metodo del ciclo de vida en componente clase
 * y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
	componentDidMount() {
		console.log('Antes que el componente sea añadido al DOM (renderize)');
	}
	render() {
		return (
			<div>
				<h1>DidMount</h1>
			</div>
		);
	}
}

export function DidMountHook() {
	useEffect(() => {
		console.log('Antes que el componente sea añadido al DOM (renderize)');
	}, []);
	return (
		<div>
			<h1>DidMountHook</h1>
		</div>
	);
}
