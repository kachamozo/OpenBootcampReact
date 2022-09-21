import React, { useEffect } from 'react';

function AllCycles() {
	useEffect(() => {
		console.log('Componente actualizado o creado');

		return () => {
			console.log('Componente va desaparecer');
		};
	}, []);

	return (
		<div>
			<h1>AllCycles</h1>
		</div>
	);
}

export default AllCycles;
