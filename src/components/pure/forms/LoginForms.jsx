/**
 * Componente que va a contener un formulario para
 * autenticación de usuarios.
 */

import React, { useState } from 'react';

function Loginform() {
	const initialCredentials = [
		{
			user: '',
			password: '',
		},
	];

	const [credentials, setCredentials] = useState(initialCredentials);

	return <div></div>;
}

export default Loginform;
