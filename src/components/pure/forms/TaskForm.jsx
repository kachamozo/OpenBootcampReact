import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

function TaskForm({ add }) {
	const nameRef = useRef('');
	const descriptionRef = useRef();
	const levelRef = useRef(LEVELS.NORMAL);

	const addTask = (e) => {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);
		add(newTask);
	};

	return (
		<form
			className='d-flex justify-content-center align-items-center mb-4'
			onSubmit={(e) => addTask(e)}
		>
			<div className='form-outline flex-fill'>
				<input
					type='text'
					id='inputName'
					ref={nameRef}
					className='form-control form-control-lg'
					required
					autoFocus
					placeholder='Task Name'
				/>
				<input
					type='text'
					id='inputDescription'
					ref={descriptionRef}
					className='form-control form-control-lg'
					required
					placeholder='Task Description'
				/>
				<label htmlFor='selectLevel' className='sr-only'>
					Priority
				</label>
				<select id='selectLevel' ref={levelRef} defaultValue={LEVELS.NORMAL}>
					<option value={LEVELS.NORMAL}>Normal</option>
					<option value={LEVELS.URGETN}>Urgent</option>
					<option value={LEVELS.BLOCKING}>Blocking</option>
				</select>
				<button type='submit' className='btn btn-success btn-lg ms-2'>
					Add
				</button>
			</div>
		</form>
	);
}

TaskForm.propTypes = {
	add: PropTypes.func.isRequired,
};

export default TaskForm;
