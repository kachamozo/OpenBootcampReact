/**
 * Ejemplo de uso de DidUpdate en componente de clase
 * y el hookd DidUpdate en un componenet funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
	componentDidUpdate() {
		console.log(
			'Comportamiento cuando el componente recibe nuevos props o cambia su estado privado'
		);
	}
	render() {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}

export function DidUpdateHook() {
	useEffect(() => {
		console.log(
			'Comportamiento cuando el componente recibe nuevos props o cambia su estado privado'
		);
	});
	return (
		<div>
			<h1>DidUpdateHook</h1>
		</div>
	);
}
