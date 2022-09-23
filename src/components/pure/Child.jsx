import React, { useRef } from 'react';

function Child({ name, send, update }) {
	const messageRef = useRef('');
	const nameRef = useRef('');

	const pressButton = () => {
		const textInput = messageRef.current.value;
		alert(`Text in Input: ${textInput}`);
	};

	const pressButtonParams = (text) => {
		alert(`Text: ${text}`);
	};

	const submitName = (e) => {
		e.preventDefault();
		update(nameRef.current.value);
	};
	return (
		<div>
			<h1 onMouseOver={() => console.log('On mouse over')}>Hello, {name}</h1>
			<button onClick={() => console.log('Boton 1 pulsado')}>Boton 1</button>
			<button onClick={pressButton}>Boton 2</button>
			<button onClick={() => pressButtonParams('Hello')}>Boton 3</button>
			<input
				type='text'
				placeholder='Insert a Text'
				onFocus={() => console.log('Focus a input')}
				onCopy={() => console.log('Texto copiado')}
				onChange={(e) => console.log('Input Change', e.target.value)}
				ref={messageRef}
			/>
			<button onClick={() => send(messageRef.current.value)}>
				Send Message at Father
			</button>
			<div style={{ marginTop: '20px' }}>
				<form onSubmit={submitName}>
					<input ref={nameRef} type='text' placeholder='New Name' />
					<button type='submit'>Update Name</button>
				</form>
			</div>
		</div>
	);
}

export default Child;
