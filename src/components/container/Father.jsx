import React, { useState } from 'react';
import Child from '../pure/Child';

function Father() {
	const [name, setName] = useState('Roly');

	const updateName = (newName) => {
		setName(newName);
	};
	const showMessage = (text) => {
		alert(`Message received: ${text}`);
	};
	return (
		<div>
			<Child name={name} send={showMessage} update={updateName} />
		</div>
	);
}

export default Father;
